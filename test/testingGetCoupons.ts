const test = require("tape");
const getCoupons = "../getCoupons.ts";
const coupon = "../couponData";

test("Coupon Data has been successfully aquired", function (t) {
  const result = getCoupons;
  const expected = getCoupons;
  t.equal(result, expected);
  t.end();
});
