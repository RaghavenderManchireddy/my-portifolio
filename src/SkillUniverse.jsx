import { useState } from 'react'
import { Code2, Monitor, Cloud, Brain, Database, Container, ShieldCheck, Network } from 'lucide-react'
import { skills } from './content'
const icons=[Code2,Monitor,Cloud,Brain,Database,Container,ShieldCheck,Network]
export default function SkillUniverse(){
 const [paused,setPaused]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches)
 return <div className={'neural-modules'+(paused?' motion-paused':'')}>
 <button type="button" className="skill-motion" onClick={()=>setPaused(p=>!p)}>{paused?'Resume':'Pause'} skill animation</button>
 {skills.map(([name,items],i)=>{const Icon=icons[i];return <article className="neural-module" key={name}>
 <header className="neural-module-header"><span className="neural-module-icon"><Icon size={26} aria-hidden="true"/></span><div><p className="neural-module-label">NEURAL MODULE {String(i+1).padStart(2,'0')}</p><h3>{name}</h3></div></header>
 <ul className="neural-module-tags">{items.map(item=><li key={item}>{item}</li>)}</ul></article>})}
 </div>
}
