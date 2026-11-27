import { useState } from 'react'
import { skills } from './content'

export default function SkillUniverse() {
  const [selected,setSelected]=useState(0)
  const [paused,setPaused]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [category,items]=skills[selected]
  return <div className={'skill-universe'+(paused?' motion-paused':'')}>
    <div className="skill-orbit" aria-label="Interactive technology categories">
      <div className="orbit-ring ring-one" aria-hidden="true"/><div className="orbit-ring ring-two" aria-hidden="true"/>
      <div className="orbit-core" aria-hidden="true"><strong>.NET</strong><small>ENGINEERING CORE</small></div>
      <svg className="orbit-links" viewBox="0 0 400 400" aria-hidden="true">
        {skills.map(([name],i)=>{const a=i*Math.PI*2/skills.length-Math.PI/2;return <line key={name} x1="200" y1="200" x2={200+145*Math.cos(a)} y2={200+145*Math.sin(a)} className={i===selected?'active':''}/>})}
      </svg>
      {skills.map(([name],i)=>{const a=i*Math.PI*2/skills.length-Math.PI/2;return <button key={name} type="button" className="orbit-node" aria-pressed={selected===i} onClick={()=>setSelected(i)} style={{left:(50+36.25*Math.cos(a))+'%',top:(50+36.25*Math.sin(a))+'%'}}><span>{String(i+1).padStart(2,'0')}</span>{name}</button>})}
    </div>
    <div className="skill-readout" aria-live="polite"><p className="eyebrow">Active neural module / {String(selected+1).padStart(2,'0')}</p><h3>{category}</h3><ul className="tags">{items.map(item=><li key={item}>{item}</li>)}</ul><p className="skill-hint">Select a connected node to explore its technology stack.</p></div>
    <button type="button" className="skill-motion" onClick={()=>setPaused(p=>!p)}>{paused?'Resume':'Pause'} skill animation</button>
  </div>
}
