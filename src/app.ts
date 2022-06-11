// Object

type Coupon = {
  id: number;
  name: string;
};

const coupon: Coupon = {
  id: 1,
  name: "Richard",
};

console.log("This is produced by an object", coupon.id);

// Interface

interface CouponInterface {
  id: number;
  name: string;
}

const coupon1: CouponInterface = {
  id: 1,
  name: "Richard",
};

console.log("This is produced by an interface", coupon.id);
