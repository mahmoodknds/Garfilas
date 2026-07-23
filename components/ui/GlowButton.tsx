interface Props {
  children: React.ReactNode;
}


export default function GlowButton({
  children
}:Props){

return (

<button
className="
relative
px-10
py-4
rounded-full
bg-orange-500
text-black
font-bold
text-lg

shadow-[0_0_40px_rgba(255,138,0,.45)]

transition
duration-300

hover:scale-105

active:scale-95

"
>

{children}

</button>

)

}