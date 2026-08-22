import { Phone, UserRound, ShoppingBag } from "lucide-react";

const items = [
  { href: "#profile", label: "پروفایل", icon: UserRound },
  { href: "#cart", label: "سبد خرید", icon: ShoppingBag },
  { href: "#contact", label: "تماس", icon: Phone },
] as const;

export default function BottomNavigation() {
  return (
    <nav className="bottom-nav" aria-label="ناوبری اصلی">
      <style>{`
        .bottom-nav { position:fixed!important;left:0!important;right:0!important;bottom:0!important;width:100vw!important;height:20vw!important;padding:0!important;margin:0!important;transform:none!important;display:block!important;background:transparent!important;border:0!important;border-radius:0!important;box-shadow:none!important;backdrop-filter:none!important;overflow:visible!important;isolation:isolate;z-index:50!important; }
        .bottom-nav-frame { position:absolute;left:0;top:0;width:100%;height:100%;display:block;z-index:0;pointer-events:none;object-fit:fill; }
        .bottom-nav-link { position:absolute!important;z-index:2;display:grid!important;place-items:center!important;margin:0!important;padding:0!important;transform:translate(-50%,-50%)!important;flex:none!important;color:#ff8a18;border:2px solid rgba(255,106,0,.9);border-radius:50%;background:rgba(7,5,4,.72);box-shadow:0 0 7px rgba(255,91,0,.72),0 0 18px rgba(255,91,0,.22),inset 0 0 8px rgba(255,91,0,.12); }
        .bottom-nav-link-0 { left:16.4%!important;top:59.23125%!important;width:clamp(2.8rem,11.5vw,3.6rem)!important;height:clamp(2.8rem,11.5vw,3.6rem)!important; }
        .bottom-nav-link-1 { left:50%!important;top:50. ...