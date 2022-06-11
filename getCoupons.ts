import coupon from "./couponData";

export async function getCoupons(ctx: any) {
  ctx.body = coupon;
}
