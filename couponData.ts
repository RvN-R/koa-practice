type Coupon = {
  code: string;
  name: string;
  type: string;
  plans: string;
  items: string;
  discountPercentage: number;
  temporalAmount: number;
  temporalUnit: string;
  maxRedemptions: number;
  couponsRedeemed: number;
  redeemBy: string;
};

const coupon: Coupon[] = [
  {
    code: "coupon-code",
    name: "internal coupon name",
    type: "percent",
    plans: "f18f37c5-deec-4722-a3b1-a681061f9bfb",
    items: "c2f0ac97-87f6-4ffb-84e1-02c317fc8f3b",
    discountPercentage: 70,
    temporalAmount: 15,
    temporalUnit: "day",
    maxRedemptions: 100,
    couponsRedeemed: 50,
    redeemBy: "07/08/2022",
  },
  {
    code: "coupon-code",
    name: "internal coupon name",
    type: "percent",
    plans: "f18f37c5-deec-4722-a3b1-a681061f9bfb",
    items: "c2f0ac97-87f6-4ffb-84e1-02c317fc8f3b",
    discountPercentage: 25,
    temporalAmount: 20,
    temporalUnit: "day",
    maxRedemptions: 50,
    couponsRedeemed: 0,
    redeemBy: "07/08/2022",
  },
];

export default coupon;
