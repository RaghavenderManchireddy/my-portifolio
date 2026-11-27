import { useEffect, useRef, useState } from 'react'

export default function NeuralScene() {
  const ref = useRef(null)
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(() => {
    const canvas = ref.current, ctx = canvas.getContext('2d')
    if (!ctx) return
    let w=1,h=1,t=0,frame=0,mx=0,my=0
    let seed=42
    const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296}
    const points=Array.from({length:380},(_,i)=>{
      const a=random()*Math.PI*2, y=random()*2-1, r=Math.sqrt(1-y*y), side=i%2?1:-1
      return [side*(.12+Math.abs(Math.cos(a))*r*.72),y*.83,Math.sin(a)*r*.62,random()*6.28]
    })
    const edges=[]
    points.forEach((a,i)=>{for(let j=i+1;j<points.length;j++){const b=points[j];if(Math.hypot(a[0]-b[0],a[1]-b[1],a[2]-b[2])<.22)edges.push([i,j])}})
    const resize=()=>{w=canvas.clientWidth;h=canvas.clientHeight;const d=Math.min(devicePixelRatio,1.5);canvas.width=w*d;canvas.height=h*d;ctx.setTransform(d,0,0,d,0,0);if(paused)draw()}
    const move=e=>{const r=canvas.getBoundingClientRect();mx=(e.clientX-r.left)/w-.5;my=(e.clientY-r.top)/h-.5}
    const draw=()=>{
      ctx.clearRect(0,0,w,h)
      const x=w*.5+mx*12,y=h*.37+my*8,R=Math.min(w*.39,h*.33),base=h*.77
      const glow=ctx.createRadialGradient(x,y,0,x,y,R*1.9);glow.addColorStop(0,'#2563eb55');glow.addColorStop(1,'#03071200');ctx.fillStyle=glow;ctx.fillRect(0,0,w,h)
      const line=(coords,color,width=1)=>{ctx.beginPath();coords.forEach(([a,b],i)=>i?ctx.lineTo(a,b):ctx.moveTo(a,b));ctx.strokeStyle=color;ctx.lineWidth=width;ctx.stroke()}
      for(let i=0;i<32;i++){const a=i*Math.PI/16, dx=Math.cos(a),dy=Math.sin(a)*.4;const path=[[x+dx*R*.56,base+dy*R*.56],[x+dx*R,base+dy*R],[x+dx*R*1.7,base+dy*R*1.7]];line(path,'#2563eb55');const q=(t*.5+i/32)%1;ctx.fillStyle='#67e8f9';ctx.fillRect(x+dx*R*(.56+q*1.14),base+dy*R*(.56+q*1.14),2,2)}
      for(let k=8;k>=0;k--){const b=base+k*2;ctx.beginPath();ctx.moveTo(x,b-R*.25);ctx.lineTo(x+R*.62,b);ctx.lineTo(x,b+R*.25);ctx.lineTo(x-R*.62,b);ctx.closePath();ctx.fillStyle=k?'#10203d':'#163961';ctx.fill();ctx.strokeStyle=k?'#234994':'#67e8f9';ctx.stroke()}
      for(let i=0;i<18;i++){ctx.beginPath();ctx.moveTo(x+(i-9)*2,base-5);ctx.quadraticCurveTo(x+Math.sin(t+i)*R*.15,y+R*.7,x+(i-9)*R*.06,y+R*.6);ctx.strokeStyle='rgba(77,180,255,.18)';ctx.stroke()}
      const a=Math.sin(t*.3)*.26+mx*.3
      const pp=points.map(p=>{const X=p[0]*Math.cos(a)-p[2]*Math.sin(a),Z=p[0]*Math.sin(a)+p[2]*Math.cos(a),q=3/(3.4-Z);return [x+X*R*q,y+p[1]*R*q,p[3]]})
      edges.forEach(([i,j])=>{const alpha=.10+.25*(1+Math.sin(t*3+i))/2;line([pp[i],pp[j]],i%3?'rgba(70,160,255,'+alpha+')':'rgba(167,139,250,'+alpha+')')})
      pp.forEach(p=>{ctx.beginPath();ctx.arc(p[0],p[1],.8+(1+Math.sin(t*3+p[2]))*.65,0,Math.PI*2);ctx.fillStyle='#bdeaff';ctx.fill()})
      for(let i=0;i<12;i++){const yy=y-R*.4+i*R*.07;ctx.beginPath();ctx.moveTo(x+(i%2?1:-1)*R*.6,yy);ctx.bezierCurveTo(x+(i%2?1:-1)*R*1.1,yy+Math.sin(t+i)*30,i%2?w:0,yy+30,i%2?w:0,yy+R*.6);ctx.strokeStyle=i%2?'#8b5cf644':'#38bdf844';ctx.stroke()}
    }
    const tick=()=>{t+=.012;draw();frame=requestAnimationFrame(tick)}
    const observer=new ResizeObserver(resize);observer.observe(canvas);canvas.addEventListener('pointermove',move);resize();draw();if(!paused)frame=requestAnimationFrame(tick)
    return()=>{observer.disconnect();canvas.removeEventListener('pointermove',move);cancelAnimationFrame(frame)}
  },[paused])
  return <figure className="neural-scene"><canvas ref={ref} aria-hidden="true"/><figcaption><span>NEURAL INTELLIGENCE / VISUAL SIMULATION</span><button type="button" onClick={()=>setPaused(p=>!p)}>{paused?'Resume motion':'Pause motion'}</button></figcaption></figure>
}
