import React, { Component } from "react";

import {
  getSku,
  getProduct,
  getDiscountRule,
} from "../services/inventoryService";

import fetch from "isomorphic-unfetch";

class ReportPrices extends Component {
  getItemTotals = orders => {
    let result = {
      Yuli: [],
      Jupebox: [],
      total: [],
      totalOrderPrice: 0,
      totalCustomDiscounts: 0,
      totalSquareFees: 0,
    };

    let index = 1;
    for (let order of orders) {
      let thisOrderPrice = 0;
      // getting total prices
      result.totalOrderPrice += +order.total;
      if (order.paymentMethod === "square" && order.chargeFee) {
        result.totalSquareFees += +order.squareFee;
      }
      if (order.customDiscount) {
        result.totalCustomDiscounts += order.customDiscount;
      }
      // need to get discount rules applied and divide them between items
      let ruleConditions = [];
      let skusToFind = [];

      if (order.appliedRules.length) {
        for (let rule of order.appliedRules) {
          let discountRule = getDiscountRule(rule.id);
          discountRule = JSON.parse(JSON.stringify(discountRule));
          if (discountRule.type && discountRule.type === "set") {
            skusToFind.push(...discountRule.skuIds);
            result[discountRule.artist].push(discountRule);
            result.total.push(discountRule);
            thisOrderPrice += discountRule.price;
          } else {
            if (Number(rule.discount) !== Number(discountRule.discount)) {
              discountRule.instances =
                Number(rule.discount) / Number(discountRule.discount);
            }
            ruleConditions.push(discountRule);
          }
        }
      }

      for (let item of order.cartItems) {
        let skuId = +item.sku;
        if (skusToFind.length && skusToFind.includes(skuId)) {
          skusToFind = skusToFind.filter(id => id !== skuId);
          // prevent item price from being added to total, since we're adding the item price already through the set price
          continue;
        }
        let sku = { ...getSku(skuId) };
        let product = getProduct(sku.parentId);
        let price = this.props.getItemPrice(skuId, item);
        let quantity = item.quantity;

        if (ruleConditions.length) {
          let matchedOptions = 0;

          for (let rule of ruleConditions) {
            if (rule.removed) {
              continue;
            }
            for (let key of rule.match) {
              if (
                (key === "medium" && product.medium === rule.medium) ||
                (sku.options && rule[key] === sku.options[key])
              ) {
                matchedOptions++;
              } else {
                matchedOptions = 0;
              }
              if (matchedOptions === rule.match.length) {
                if (rule.quantity === 0 || rule.discount === 0) {
                  break;
                }
                // have to multiply ruleDiscount by item quantity because cart items !== skus

                let ruleDiscount = Number(
                  (rule.discount / rule.quantity) * quantity
                );

                let leftoverQuantity = 0;
                // save part of the discount for the next iteration of the rule, if there is another iteration; otherwise dump the extra discount
                if (quantity > rule.quantity) {
                  leftoverQuantity = quantity - rule.quantity;
                  ruleDiscount = rule.discount;
                }

                // discount the item directly
                price = Number(price) - ruleDiscount;
                // reduce the total remaining discount by the amount already allotted
                rule.discount = Number(rule.discount) - ruleDiscount;
                // reduce the quantity of items to apply the discount to by the item already spent
                rule.quantity =
                  rule.quantity - (leftoverQuantity ? rule.quantity : quantity);
                if (rule.quantity === 0) {
                  if (rule.instances && rule.instances > 1) {
                    rule.instances -= 1;
                    let originalRule = getDiscountRule(rule.id);
                    rule.quantity = originalRule.quantity;
                    rule.discount = originalRule.discount;

                    // so basically this SHOULD be a recursive function but for now I'm just hacking it one layer deep
                    if (leftoverQuantity) {
                      ruleDiscount = Number(
                        (rule.discount / rule.quantity) * quantity
                      );
                      price = Number(price) - ruleDiscount;
                      rule.discount = Number(rule.discount) - ruleDiscount;
                      rule.quantity =
                        rule.quantity -
                        (leftoverQuantity ? rule.quantity : quantity);
                      if (rule.quantity === 0) {
                        if (rule.instances && rule.instances > 1) {
                          rule.instances -= 1;
                          let originalRule = getDiscountRule(rule.id);
                          rule.quantity = originalRule.quantity;
                          rule.discount = originalRule.discount;
                        } else {
                          rule.removed = true;
                        }
                      }
                    }
                  } else {
                    rule.removed = true;
                  }
                }
              }
            }
          }
        }
        thisOrderPrice += price;
        sku.price = price;
        sku.quantity = quantity;
        result[product.artist].push(sku);
        result.total.push(sku);
      }
      thisOrderPrice -= order.customDiscount;
      if (thisOrderPrice !== order.total) {
        console.log(index, thisOrderPrice, order.total);
      }
      index++;
    }
    return result;
  };

  render() {
    this.itemTotals = this.getItemTotals(this.props.orders || []);
    return (
      <section>
        <p>
          Total:
          {this.itemTotals.total.reduce((totalPrice, item) => {
            return Number(totalPrice) + Number(item.price);
          }, 0) - this.itemTotals.totalCustomDiscounts}
          <span> | </span>
          {this.itemTotals.totalOrderPrice}
        </p>
        <p>
          Jupebox:
          {this.itemTotals.Jupebox.reduce((totalPrice, item) => {
            return Number(totalPrice) + Number(item.price);
          }, 0) - this.itemTotals.totalCustomDiscounts //+ this.itemTotals.totalSquareFees
          }
        </p>
        <p>
          Yuli:
          {this.itemTotals.Yuli.reduce((totalPrice, item) => {
            return Number(totalPrice) + Number(item.price);
          }, 0)}
        </p>
        <ol>
          {this.props.orders &&
            this.props.orders.length > 0 &&
            this.props.orders.map(order => (
              <li key={order._id}>
                <p>
                  {order.total}, {order.paymentMethod === "square" && "[]"}
                </p>
                <p>{order.productIds}</p>
              </li>
            ))}
        </ol>
      </section>
    );
  }
}

ReportPrices.getInitialProps = async function() {
  debugger;
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    orders: data.map(entry => entry.show),
  };
};

export default ReportPrices;
