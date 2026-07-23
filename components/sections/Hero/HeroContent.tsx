import GlowButton from "../ui/GlowButton";
import {brand} from "@/config/brand";


export default function HeroSection(){

return (

<section
className="
min-h-screen
flex
flex-col
items-center
justify-center

px-6

text-center
"
>


<div
className="
w-64
h-64

rounded-full

bg-orange-500/10

border

border-orange-500/30

flex

items-center

justify-center

animate-pulse
"
>


<span
className="
text-7xl
"
>
🍝
</span>


</div>


<h1
className="
mt-10
text-5xl
font-black
tracking-wide
"
>

{brand.name}

</h1>


<p
className="
mt-4
text-gray-300
text-lg
"
>

{brand.slogan}

</p>


<div
className="
mt-10
"
>

<GlowButton>

{brand.navigation.menu}

</GlowButton>


</div>


</section>

)

}