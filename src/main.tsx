import { createRoot } from 'react-dom/client'
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import './style.css'

type SectionHeadingProps = { index: string; eyebrow: string; title: ReactNode; className?: string }

const base = import.meta.env.BASE_URL
function asset(path: string) { 
  const clean = path.startsWith('/') ? path.slice(1) : path
  return `${base}${clean.split('/').map(s => encodeURIComponent(s)).join('/')}`
}

const designProjects = [
  ['vrindhavan creative 3 (1).png', 'Vrindhavan', 'Campaign identity'], ['vrindhavan creative 1.png', 'Vrindhavan', 'Campaign creative'], ['urban max joystreet creative 1.png', 'Urban Max', 'Digital campaign'], ['trilive crousel slide 2.png', 'TriLive', 'Social system'], ['OMAXE CREATIVE 1 with goggle number.png', 'Omaxe', 'Launch creative'], ['CREATIVE 2 OMAX.png', 'Omaxe', 'Campaign creative'], ['migsun lucknow goggle number updated 1.jpg', 'Migsun', 'Brand campaign'], ['migsun central creative without number 1.jpg', 'Migsun Central', 'Performance creative'], ['creative 3 for lucknow central google.png', 'Lucknow Central', 'Digital campaign'], ['GAUR CHRYSALIS CREATIVE FOR GOOGLE 1.jpg', 'Gaur Chrysalis', 'Performance creative'], ['bootes creative 1.png', 'Bootes', 'Brand storytelling'], ['bootes second creative 1.png', 'Bootes', 'Campaign creative'], ['bento creative 1.jpg', 'Bento', 'Product narrative'], ['dome mall copy.jpg', 'Dome Mall', 'Retail campaign'], ['au 10th tower creative 1 updated.png', 'AU 10th Tower', 'Launch creative'], ['Artboard 8.png', 'Aurelia', 'Editorial direction'], ['Artboard 1.jpg', 'Aurelia', 'Editorial creative'], ['svg creative without number.png', 'SVG', 'Visual identity'], ['svg creative meta.jpg', 'SVG', 'Social creative'], ['svg new creative 2.jpg', 'SVG', 'Campaign creative'], ['svg new creative 3.jpg', 'SVG', 'Campaign creative'],
].map(([asset, title, type]) => ({ asset, title, type, kind: 'creative' as const }))
const motionProjects = [
  ['vrindhavan edm by devansh.mp4', 'Vrindhavan', 'EDM film'], ['urban max joystreetvideo without number.mp4', 'Urban Max', 'Campaign edit'], ['spj amount edm.mp4', 'SPJ', 'Launch motion'], ['migsun ad video.mp4', 'Migsun', 'Brand film'], ['100 migsun_1.mp4', 'Migsun', 'Campaign film'], ['investment video for bop.mp4', 'BOP Realty', 'Explainer film'], ['gic ad video.mp4', 'GIC', 'Digital ad'], ['gaur bento vid.mp4', 'Gaur', 'Motion system'], ['bootes ai ad video.mp4', 'Bootes', 'AI campaign'], ['ai ad video for bento updated.mp4', 'Bento', 'Product motion'],
].map(([asset, title, type]) => ({ asset, title, type, kind: 'motion' as const }))
type Project = (typeof designProjects)[number] | (typeof motionProjects)[number]

const skills = ['Motion Graphics', 'Video Editing', 'Graphic Design', 'Ad Creatives', 'Brand Identity', 'Visual Storytelling', 'Real Estate Marketing', 'Presentation Design']

function SectionHeading({ index, eyebrow, title, className = '' }: SectionHeadingProps) {
  return <div className={`section-heading ${className}`}>
    <p><span>{index}</span>{eyebrow}</p>
    <h2>{title}</h2>
  </div>
}

function Grain() { return <div className="grain" aria-hidden="true" /> }

function PaperPlane() {
  return <svg className="paper-plane" viewBox="0 0 32 32" aria-hidden="true"><path d="M3 5 29 16 3 27l5-11L3 5Z" /><path d="m8 16 21-1M8 16l8 5" /></svg>
}

function Arrow() { return <span className="arrow">↗</span> }

function WhatsAppIcon() { return <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.4-4.4A8.4 8.4 0 1 1 20.5 11.7Z" /><path d="M8.5 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.7c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .5.5.9 1.3 1.7 2.2 2.2.2.1.4.1.5 0l.7-.8c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.3-1.1.5-1.6.4-1.1-.2-2.7-1-4.2-2.4-1.2-1.2-2.1-2.6-2.4-4.1-.1-.5 0-1.2.3-1.6Z" /></svg> }

function MailIcon() { return <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg> }

function LoadingCurtain({ loaded }: { loaded: boolean }) { return <div className={`loading-curtain ${loaded ? 'is-loaded' : ''}`} aria-hidden="true"><p>DEVANSH<span>®</span></p><div><i /> <b>BUILDING A VISUAL SIGNAL</b></div></div> }

function LiquidRibbonScene() {
  useEffect(() => {
    const THREE = (window as Window & { THREE?: any }).THREE
    const mount = document.querySelector<HTMLElement>('.ribbon-scene')
    if (!THREE || !mount || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, .1, 100)
    camera.position.set(0, 0, 9)
    const group = new THREE.Group()
    scene.add(group)
    const segments = 84
    const positions = new Float32Array((segments + 1) * 2 * 3)
    const indices: number[] = []
    for (let i = 0; i < segments; i++) { const a = i * 2; indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2) }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setIndex(indices)
    const material = new THREE.MeshPhysicalMaterial({ color: 0x9b8cff, roughness: .08, metalness: .05, transmission: .32, thickness: 1.1, transparent: true, opacity: .82, side: THREE.DoubleSide, iridescence: 1, iridescenceIOR: 1.24, emissive: 0x17113d, emissiveIntensity: .35 })
    const ribbon = new THREE.Mesh(geometry, material)
    group.add(ribbon)
    const particleGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(165 * 3)
    for (let i = 0; i < 165; i++) { const angle = i * 2.399; const radius = 2.6 + (i % 13) * .055; particlePositions[i * 3] = Math.cos(angle) * radius; particlePositions[i * 3 + 1] = Math.sin(angle * 1.7) * radius * .6; particlePositions[i * 3 + 2] = Math.sin(angle) * .7 }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    const particles = new THREE.Points(particleGeometry, new THREE.PointsMaterial({ color: 0xe9ff9d, size: .032, transparent: true, opacity: .78, depthWrite: false }))
    group.add(particles)
    const light = new THREE.PointLight(0xb5c5ff, 5, 18)
    light.position.set(2, 3, 4); scene.add(light)
    scene.add(new THREE.AmbientLight(0xffd5e2, 2.2))
    let mouseX = 0, mouseY = 0, targetScroll = 0, frame = 0
    const onPointer = (event: PointerEvent) => { mouseX = event.clientX / window.innerWidth - .5; mouseY = event.clientY / window.innerHeight - .5 }
    const onScroll = () => { targetScroll = window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight) }
    const onResize = () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight) }
    window.addEventListener('pointermove', onPointer, { passive: true }); window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('resize', onResize, { passive: true }); onScroll()
    const clock = new THREE.Clock()
    const animate = () => {
      frame = requestAnimationFrame(animate)
      const time = clock.getElapsedTime(), scroll = targetScroll
      const attribute = geometry.attributes.position
      for (let i = 0; i <= segments; i++) {
        const u = i / segments, x = (u - .5) * 7.3
        const wave = Math.sin(u * Math.PI * (2.1 + scroll * 2.6) + time * .7) * (.42 + scroll * .28)
        const y = wave + Math.cos(u * 10 - time * .55) * .16
        const z = Math.sin(u * Math.PI * 3 + time * .55) * (.42 + scroll * .38)
        const width = .3 + Math.sin(u * Math.PI) * (.26 + scroll * .22) + Math.sin(time + u * 9) * .04
        attribute.setXYZ(i * 2, x, y - width, z - .08)
        attribute.setXYZ(i * 2 + 1, x, y + width, z + .08)
      }
      attribute.needsUpdate = true; geometry.computeVertexNormals()
      group.rotation.y += (mouseX * .65 - group.rotation.y) * .028
      group.rotation.x += (-mouseY * .42 - group.rotation.x) * .028
      group.rotation.z = Math.sin(time * .25) * .12 + scroll * .85
      group.position.y = Math.sin(time * .45) * .22 - scroll * .42
      group.scale.setScalar(.83 + scroll * .24)
      particles.rotation.z = time * .12 + scroll * 3.4; particles.rotation.y = time * .08
      const shell = document.querySelector<HTMLElement>('.site-shell')
      const hue = shell ? Number.parseFloat(getComputedStyle(shell).getPropertyValue('--art-hue')) || 0 : scroll * 230
      material.color.setHSL(((hue + 250) % 360) / 360, .76, .66); material.emissive.setHSL(((hue + 200) % 360) / 360, .48, .13)
      particles.material.color.setHSL(((hue + 84) % 360) / 360, .85, .75)
      light.color.setHSL(((hue + 302) % 360) / 360, .82, .72)
      renderer.render(scene, camera)
    }
    animate()
    return () => { cancelAnimationFrame(frame); window.removeEventListener('pointermove', onPointer); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); geometry.dispose(); particleGeometry.dispose(); material.dispose(); particles.material.dispose(); renderer.dispose(); renderer.domElement.remove() }
  }, [])
  return <div className="ribbon-scene" aria-hidden="true" />
}

function transition(change: () => void) {
  const documentWithTransition = document as Document & { startViewTransition?: (callback: () => void) => void }
  if (documentWithTransition.startViewTransition) documentWithTransition.startViewTransition(change)
  else change()
}

function CaseStudy({ project, projects, onBack, onNext }: { project: Project; projects: Project[]; onBack: () => void; onNext: () => void }) {
  const isMotion = project.kind === 'motion'
  return <section className={`case-study ${isMotion ? 'motion-case' : 'creative-case'}`} aria-label={`${project.title} case study`}>
    <header className="case-nav"><button data-cursor="OPEN" onClick={() => transition(onBack)}>← BACK TO {isMotion ? 'VIDEO EDITING' : 'CREATIVE'} ARCHIVE</button><span>CASE STUDY / {project.type.toUpperCase()}</span><button data-cursor="OPEN" onClick={onNext}>NEXT <Arrow /></button></header>
    <div className="case-hero"><p>SELECTED PROJECT / 2026</p><h1>{project.title}<br /><em>{project.type}.</em></h1><div className="case-media" style={{ viewTransitionName: `media-${project.kind}` }}>{isMotion ? <video src={asset(`/assets/videos/${project.asset}`)} autoPlay muted loop playsInline /> : <img src={asset(`/assets/images/${project.asset}`)} alt="" />}</div></div>
    <div className="case-facts"><p><span>OVERVIEW</span>A visual world with enough tension to stop a scroll and enough clarity to carry the message.</p><p><span>CHALLENGE</span>Make the work feel immediate, ownable and alive across every touchpoint.</p><p><span>RESULT</span>A distinct system built to move—across formats, audiences and moments.</p></div>
    <div className="case-gallery"><div className="gallery-lead">{isMotion ? <video src={asset(`/assets/videos/${project.asset}`)} autoPlay muted loop playsInline /> : <img src={asset(`/assets/images/${project.asset}`)} alt="" />}</div><div className="gallery-copy"><p>GALLERY / MOTION PREVIEW</p><h2>Every frame earns<br />its <em>place.</em></h2><div className="software"><span>SOFTWARE</span><b>{isMotion ? 'AFTER EFFECTS · PREMIERE PRO · PHOTOSHOP' : 'PHOTOSHOP · ILLUSTRATOR · FIGMA'}</b></div></div></div>
    <button className="next-project" data-cursor="OPEN" onClick={onNext}><span>NEXT PROJECT</span><strong>{projects[(projects.findIndex((item) => item.asset === project.asset) + 1) % projects.length].title}</strong><Arrow /></button>
  </section>
}

function ProjectArchive({ kind, onClose }: { kind: 'creative' | 'motion'; onClose: () => void }) {
  const projects = kind === 'creative' ? designProjects : motionProjects
  const [selected, setSelected] = useState<Project | null>(null)
  if (selected) return <CaseStudy project={selected} projects={projects} onBack={() => setSelected(null)} onNext={() => transition(() => setSelected(projects[(projects.findIndex((item) => item.asset === selected.asset) + 1) % projects.length]))} />
  return <section className={`project-archive ${kind === 'creative' ? 'creative-archive' : 'motion-archive'}`}><header className="archive-top"><button data-cursor="OPEN" onClick={() => transition(onClose)}>← CLOSE</button><p>{kind === 'creative' ? 'CREATIVE DESIGN' : 'VIDEO EDITING'} / SELECTED ARCHIVE</p><span>{String(projects.length).padStart(2, '0')} PROJECTS</span></header><div className="archive-title"><h1>{kind === 'creative' ? <>Creative<br /><em>Design.</em></> : <>Video<br /><em>Editing.</em></>}</h1><p>{kind === 'creative' ? 'A full archive of designed images, identities and worlds made to hold attention.' : 'A full archive of video edits, films, motion systems and stories with a pulse.'}</p></div><div className="archive-grid">{projects.map((project, index) => <button className="archive-project" data-cursor={kind === 'motion' ? 'PLAY' : 'VIEW'} key={project.asset} onClick={() => transition(() => setSelected(project))}><div className="archive-media">{kind === 'motion' ? <video src={asset(`/assets/videos/${project.asset}`)} muted autoPlay loop playsInline preload="metadata" /> : <img src={asset(`/assets/images/${project.asset}`)} alt="" />}</div><span>0{index + 1} / {project.type}</span><strong>{project.title}</strong><Arrow /></button>)}</div></section>
}

const collectionItems = {
  illustrations: ['anime illustration 1.jpeg', 'anime illustration 2.jpeg', 'anime illustration 3.jpeg', 'anime illustration 4.jpg', 'iron man illustration.jpeg'],
  'motion-graphics': ["devansh bansal's motion graphic portfolio - 1080.mp4"],
} as const

function CollectionArchive({ kind, onClose }: { kind: 'illustrations' | 'motion-graphics'; onClose: () => void }) {
  const isMotionGraphics = kind === 'motion-graphics'
  const items = collectionItems[kind]
  const label = isMotionGraphics ? 'MOTION GRAPHICS' : 'ILLUSTRATIONS'
  return <section className="project-archive collection-archive"><header className="archive-top"><button data-cursor="OPEN" onClick={() => transition(onClose)}>← CLOSE</button><p>{label} / SELECTED ARCHIVE</p><span>{String(items.length).padStart(2, '0')} PROJECTS</span></header><div className="archive-title"><h1>{isMotionGraphics ? <>Motion<br /><em>Graphics.</em></> : <>Digital<br /><em>Illustrations.</em></>}</h1><p>{isMotionGraphics ? 'A motion-graphics portfolio reel, presented in its original full frame.' : 'Character studies, fan art and personal illustration explorations.'}</p></div><div className={`archive-grid ${isMotionGraphics ? 'motion-graphics-grid' : 'illustration-archive-grid'}`}>{items.map((filename, index) => <article className="archive-project" key={filename}><div className="archive-media">{isMotionGraphics ? <video src={asset(`/assets/motion graphics/${filename}`)} controls playsInline preload="metadata" /> : <img src={asset(`/assets/illustrations/${filename}`)} alt={`Illustration ${index + 1}`} />}</div><span>0{index + 1} / {label}</span><strong>{isMotionGraphics ? 'Portfolio Reel' : `Illustration ${index + 1}`}</strong></article>)}</div></section>
}

function SignalSystem() {
  useEffect(() => {
    const gsap = (window as Window & { gsap?: any; MotionPathPlugin?: any; MorphSVGPlugin?: any }).gsap
    const plugins = (window as Window & { MotionPathPlugin?: any; MorphSVGPlugin?: any })
    if (!gsap || !plugins.MotionPathPlugin) return
    gsap.registerPlugin(plugins.MotionPathPlugin)
    if (plugins.MorphSVGPlugin) gsap.registerPlugin(plugins.MorphSVGPlugin)
    const timeline = gsap.context(() => {
      gsap.to('.signal-dash', { strokeDashoffset: -520, duration: 18, ease: 'none', repeat: -1 })
      if (plugins.MorphSVGPlugin) gsap.to('#signal-ribbon', { morphSVG: '#signal-ribbon-alt', duration: 9, ease: 'sine.inOut', yoyo: true, repeat: -1 })
      gsap.to('.signal-traveller', { motionPath: { path: '#signal-route', align: '#signal-route', alignOrigin: [0.5, 0.5] }, duration: 22, ease: 'none', repeat: -1 })
      gsap.to('.signal-sticker', { rotation: 4, transformOrigin: 'center center', duration: 4.4, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: .6 })
      gsap.to('.signal-frame', { rotation: -5, transformOrigin: 'center center', duration: 5.6, ease: 'sine.inOut', yoyo: true, repeat: -1 })
      gsap.to('.signal-tech', { rotation: 360, transformOrigin: 'center center', duration: 20, ease: 'none', repeat: -1 })
    })
    return () => timeline.revert()
  }, [])

  return <svg className="signal-system" viewBox="0 0 1440 7200" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <linearGradient id="signal-gradient" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#1f41ff" /><stop offset=".52" stopColor="#ff734a" /><stop offset="1" stopColor="#dcff4e" /></linearGradient>
      <filter id="soft-glow"><feGaussianBlur stdDeviation="9" /></filter>
    </defs>
    <path id="signal-route" className="signal-route signal-dash" d="M-80 420 C260 260 360 720 720 580 S1260 400 1500 690 C1260 980 1130 1030 840 1020 S320 1250 70 1430 C-100 1550 280 1770 560 1660 S1200 1550 1480 1870 C1130 2100 850 1950 650 2220 S120 2500 -70 2700 C200 2860 390 2730 600 2900 S1120 3220 1500 3060 C1230 3410 900 3330 710 3650 S250 3900 -70 4070 C180 4280 500 4140 760 4380 S1220 4590 1490 4470 C1180 4820 900 4740 660 5030 S190 5270 -80 5450 C240 5620 430 5480 720 5720 S1230 5980 1500 5840 C1190 6200 900 6150 690 6420 S210 6800 -80 6970" />
    <path className="signal-route signal-fine" d="M-40 760 C290 610 310 990 630 900 S1150 780 1470 970 M-30 3240 C260 3080 460 3420 740 3290 S1190 3380 1470 3540 M-30 5780 C230 5600 480 5900 720 5800 S1160 5700 1480 5920" />
    <path id="signal-ribbon" className="signal-ribbon" d="M1150 260c110 40 146 164 61 244-72 68-174-10-110-69 43-40 7-83-37-39-84 82-214-7-139-116 57-83 159-66 225-20Z" />
    <path id="signal-ribbon-alt" d="M1150 260c143-19 203 105 121 203-77 91-214 14-139-58 51-49-10-92-56-31-80 106-246 14-145-108 54-65 145-27 219-6Z" visibility="hidden" />
    <g className="signal-sticker"><rect x="105" y="1670" width="165" height="112" rx="26" /><path d="M137 1732h102M188 1688v83" /><text x="127" y="1754">FORM / 02</text></g>
    <g className="signal-frame"><rect x="1074" y="2560" width="235" height="178" rx="31" /><rect x="1097" y="2583" width="189" height="132" rx="20" /><path d="M1115 2698 C1160 2600 1218 2760 1272 2610" /></g>
    <g className="signal-tech"><path d="M94 3700h220M204 3590v220" /><path d="M127 3623 281 3777M281 3623 127 3777" /><rect x="131" y="3617" width="146" height="166" rx="73" /></g>
    <g className="signal-sticker signal-sticker-two"><rect x="1090" y="5160" width="215" height="132" rx="66" /><path d="M1140 5225c55-67 99 77 150 0" /><text x="1134" y="5268">CUT / PASTE</text></g>
    <g className="signal-traveller"><path d="M-20-10h40v20h-40z" /></g>
  </svg>
}

function useTactileMotion() {
  useEffect(() => {
    const gsap = (window as Window & { gsap?: any }).gsap
    const mouse = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - .5
      const y = event.clientY / window.innerHeight - .5
      document.documentElement.style.setProperty('--mouse-x', `${x * 22}px`)
      document.documentElement.style.setProperty('--mouse-y', `${y * 22}px`)
      const cursor = document.querySelector<HTMLElement>('.cursor-signal')
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-cursor]')
      const label = target?.dataset.cursor || ''
      if (cursor) {
        cursor.classList.toggle('is-active', Boolean(label))
        const text = cursor.querySelector('b')
        if (text && text.textContent !== label) text.textContent = label
      }
      if (!gsap) return
      gsap.to('.cursor-signal', { x: event.clientX, y: event.clientY, duration: .34, ease: 'power3.out' })
    }
    window.addEventListener('pointermove', mouse, { passive: true })
    if (!gsap) return () => window.removeEventListener('pointermove', mouse)
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-attract]'))
    const cleanups = items.map((item) => {
      const move = (event: PointerEvent) => {
        const bounds = item.getBoundingClientRect()
        const lightX = ((event.clientX - bounds.left) / bounds.width) * 100
        const lightY = ((event.clientY - bounds.top) / bounds.height) * 100
        item.style.setProperty('--light-x', `${lightX}%`)
        item.style.setProperty('--light-y', `${lightY}%`)
        gsap.to(item, { x: (event.clientX - bounds.left - bounds.width / 2) * .075, y: (event.clientY - bounds.top - bounds.height / 2) * .075, duration: .6, ease: 'elastic.out(1,.45)', overwrite: 'auto' })
      }
      const leave = () => gsap.to(item, { x: 0, y: 0, duration: 1.15, ease: 'elastic.out(1,.35)', overwrite: 'auto' })
      item.addEventListener('pointermove', move)
      item.addEventListener('pointerleave', leave)
      return () => { item.removeEventListener('pointermove', move); item.removeEventListener('pointerleave', leave) }
    })
    return () => { window.removeEventListener('pointermove', mouse); cleanups.forEach((cleanup) => cleanup()) }
  }, [])
}

function useScrollArtwork() {
  useEffect(() => {
    const context = window as Window & { gsap?: any; ScrollTrigger?: any }
    const gsap = context.gsap
    if (!gsap || !context.ScrollTrigger) return
    gsap.registerPlugin(context.ScrollTrigger)
    const scope = gsap.context(() => {
      const artwork = gsap.timeline({
        scrollTrigger: { trigger: '.site-shell', start: 'top top', end: 'bottom bottom', scrub: 1.2 },
        defaults: { ease: 'none' },
      })
      artwork
        .to('.site-shell', { '--art-hue': 42, '--art-wash': 1, duration: .18 }, 0)
        .to('.signal-system', { rotation: 3, scale: 1.035, transformOrigin: '50% 50%', duration: .25 }, 0)
        .to('.signal-ribbon', { scaleX: 1.7, scaleY: .66, rotation: 22, transformOrigin: 'center center', duration: .2 }, .05)
        .to('.signal-route', { strokeWidth: 5.5, duration: .15 }, .13)
        .to('.site-shell', { '--art-hue': 165, '--art-wash': .35, duration: .23 }, .2)
        .to('.signal-system', { rotation: -4, scale: 1.07, transformOrigin: '50% 50%', duration: .28 }, .25)
        .to('.signal-ribbon', { scaleX: .72, scaleY: 1.45, rotation: -18, transformOrigin: 'center center', duration: .25 }, .28)
        .to('.site-shell', { '--art-hue': 270, '--art-wash': 1.2, duration: .27 }, .43)
        .to('.signal-route', { strokeWidth: 2, duration: .18 }, .5)
        .to('.signal-system', { rotation: 1, scale: 1.01, transformOrigin: '50% 50%', duration: .32 }, .55)
        .to('.signal-ribbon', { scaleX: 1, scaleY: 1, rotation: 0, transformOrigin: 'center center', duration: .3 }, .64)

      gsap.utils.toArray<HTMLElement>('h1, h2, .statement, blockquote').forEach((type, index) => {
        const amount = index % 2 ? -9 : 9
        gsap.to(type, { xPercent: amount, rotate: index % 2 ? -1.2 : 1.2, scrollTrigger: { trigger: type, start: 'top bottom', end: 'bottom top', scrub: 1.1 }, ease: 'none' })
      })
      gsap.utils.toArray<HTMLElement>('.project-card, .service-stack, .experience-list').forEach((piece, index) => {
        gsap.to(piece, { y: index % 2 ? -58 : 58, rotate: index % 2 ? -.8 : .8, scrollTrigger: { trigger: piece, start: 'top bottom', end: 'bottom top', scrub: 1.4 }, ease: 'none' })
      })
    })
    return () => scope.revert()
  }, [])
}

function useCinematicMotion() {
  useEffect(() => {
    const context = window as Window & { gsap?: any; ScrollTrigger?: any; SplitText?: any }
    const gsap = context.gsap
    if (!gsap || !context.ScrollTrigger || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.registerPlugin(context.ScrollTrigger)
    const splits: any[] = []
    const split = (target: Element, vars: Record<string, unknown>, delay = 0) => {
      if (!context.SplitText) return gsap.from(target, { ...vars, delay, scrollTrigger: { trigger: target, start: 'top 87%', once: true } })
      const instance = new context.SplitText(target, { type: 'words,chars', wordsClass: 'split-word', charsClass: 'split-char' })
      splits.push(instance)
      return gsap.from(instance.words, { ...vars, delay, stagger: .045, scrollTrigger: { trigger: target, start: 'top 87%', once: true } })
    }
    const scope = gsap.context(() => {
      const hero = document.querySelector('.hero h1')
      if (hero) split(hero, { yPercent: 118, rotateX: -72, transformOrigin: '0 100%', duration: 1.25, ease: 'power4.out' })
      gsap.from('.hero .kicker', { letterSpacing: '.45em', y: 15, autoAlpha: 0, duration: .85, delay: .35, ease: 'expo.out' })
      gsap.from('.hero-intro', { y: 26, filter: 'blur(12px)', autoAlpha: 0, duration: 1.1, delay: .55, ease: 'power4.out' })
      gsap.from('.hero-meta p, .scroll-note', { y: 12, letterSpacing: '.22em', autoAlpha: 0, stagger: .12, duration: .75, delay: .8, ease: 'expo.out' })
      const about = document.querySelector('.statement'); if (about) split(about, { yPercent: 105, skewY: 5, duration: 1.15, ease: 'power4.out' })
      gsap.from('.about-lower>*', { y: 35, filter: 'blur(10px)', autoAlpha: 0, duration: .9, stagger: .16, ease: 'power4.out', scrollTrigger: { trigger: '.about-lower', start: 'top 82%', once: true } })
      document.querySelectorAll<HTMLElement>('.section-heading h2').forEach((heading, index) => split(heading, { clipPath: index % 2 ? 'inset(0 0 100% 0)' : 'inset(100% 0 0 0)', y: index % 2 ? -35 : 35, scale: .95, duration: 1.05, ease: 'expo.out' }))
      document.querySelectorAll<HTMLElement>('.section-heading h2 em').forEach((italic) => gsap.from(italic, { x: 25, skewX: -9, autoAlpha: 0, duration: .75, delay: .28, ease: 'power4.out', scrollTrigger: { trigger: italic.closest('h2'), start: 'top 85%', once: true } }))
      gsap.from('.experience-row', { y: 54, filter: 'blur(11px)', autoAlpha: 0, stagger: .13, duration: .9, ease: 'power4.out', scrollTrigger: { trigger: '.experience-list', start: 'top 80%', once: true } })
      gsap.from('.experience-list', { scaleX: .1, transformOrigin: '0 50%', duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.experience-list', start: 'top 83%', once: true } })
      const marquee = document.querySelector('.skill-marquee')
      if (marquee) {
        gsap.from(marquee.querySelectorAll('span'), { xPercent: -35, rotate: -4, stagger: .09, duration: .8, ease: 'power4.out', scrollTrigger: { trigger: '.skills', start: 'top 78%', once: true } })
      }
      gsap.from('.skill-cell', { y: 70, rotateX: -34, transformOrigin: '50% 100%', autoAlpha: 0, stagger: .075, duration: .75, ease: 'back.out(1.45)', scrollTrigger: { trigger: '.skills-grid', start: 'top 82%', once: true } })
      gsap.from('.feature-card', { y: 92, rotate: (index: number) => index ? 4 : -4, scale: .93, autoAlpha: 0, stagger: .2, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: '.feature-categories', start: 'top 82%', once: true } })
      const quote = document.querySelector('.testimonial blockquote'); if (quote) split(quote, { yPercent: 94, rotateX: -45, duration: 1, ease: 'power4.out' })
      const contact = document.querySelector('.contact h2'); if (contact) split(contact, { xPercent: -35, skewY: 4, duration: 1.15, ease: 'expo.out' })
      gsap.from('.contact-card, .contact-cta, .contact-sticker', { y: 45, filter: 'blur(9px)', autoAlpha: 0, scale: .92, stagger: .15, duration: .9, ease: 'elastic.out(1,.65)', scrollTrigger: { trigger: '.contact', start: 'top 75%', once: true } })
      gsap.from('.section-heading>p,.about-side p,.skills-top p,.testimonial>p,.contact>p,.project-info span,.feature-info>span', { y: 9, letterSpacing: '.22em', autoAlpha: 0, stagger: .035, duration: .65, ease: 'expo.out', scrollTrigger: { trigger: 'main', start: 'top top', end: 'bottom bottom', toggleActions: 'play none none none' } })
      context.ScrollTrigger.create({ trigger: '.site-shell', start: 'top top', end: 'bottom bottom', onUpdate: (self: any) => { const speed = Math.min(1.35, .75 + Math.abs(self.getVelocity()) / 2800); document.documentElement.style.setProperty('--scroll-velocity', `${speed}`) } })
    })
    // ScrollTrigger needs a fresh layout after custom fonts, videos and images have their final sizes.
    const refresh = () => context.ScrollTrigger.refresh()
    const refreshFrame = window.requestAnimationFrame(refresh)
    window.addEventListener('load', refresh, { once: true })
    document.fonts?.ready.then(refresh)
    return () => {
      window.cancelAnimationFrame(refreshFrame)
      window.removeEventListener('load', refresh)
      scope.revert(); splits.forEach((instance) => instance.revert())
    }
  }, [])
}

function App() {
  useTactileMotion()
  useScrollArtwork()
  useCinematicMotion()
  const [archive, setArchive] = useState<'creative' | 'motion' | 'illustrations' | 'motion-graphics' | null>(null)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const timer = window.setTimeout(() => setLoaded(true), 850); return () => window.clearTimeout(timer) }, [])
  if (archive === 'illustrations' || archive === 'motion-graphics') return <div className="archive-shell"><LoadingCurtain loaded={loaded} /><div className="cursor-signal" aria-hidden="true"><i /><b>MOVE</b></div><CollectionArchive kind={archive} onClose={() => setArchive(null)} /></div>
  if (archive) return <div className="archive-shell"><LoadingCurtain loaded={loaded} /><div className="cursor-signal" aria-hidden="true"><i /><b>MOVE</b></div><ProjectArchive kind={archive} onClose={() => setArchive(null)} /></div>
  return <div className="site-shell">
    <LoadingCurtain loaded={loaded} />
    <Grain />
    <SignalSystem />
    <div className="cursor-signal" aria-hidden="true"><i /><b>MOVE</b></div>
    <header className="topbar">
      <a className="wordmark" href="#top">DEVANSH<span>®</span></a>
      <p className="availability"><i />AVAILABLE FOR SELECTED PROJECTS — 2026</p>
      <a className="contact-link" data-cursor="OPEN" href="#contact">LET'S TALK <Arrow /></a>
    </header>

    <main id="top">
      <section className="hero section-grid">
        <div className="hero-meta"><p>INDEPENDENT<br />CREATIVE PRACTICE</p><p>DELHI / EVERYWHERE</p></div>
        <div className="hero-copy">
          <p className="kicker">GRAPHIC DESIGN / MOTION / FILM / BRAND</p>
          <h1>Making<br /><em>meaning</em> visible.</h1>
          <p className="hero-intro">A designer shaping identities, campaigns and moving images for brands with something to say.</p>
        </div>
        <div className="hero-object" data-attract data-cursor="VIEW"><div className="poster-word">FORM<br />FOLLOWS<br /><em>FEELING</em></div><div className="hero-frame"><span>VISUAL<br />SIGNAL</span><i /></div><span className="object-caption">001 — A STUDY IN<br />OPTICAL RHYTHM</span></div>
        <a className="scroll-note" href="#about">SCROLL TO EXPLORE <span>↓</span></a>
      </section>

      <section id="about" className="about section-grid">
        <div className="about-side"><p>01 / ABOUT</p><span>✳</span></div>
        <div className="about-main">
          <p className="statement">I turn raw ideas into <em>clear, magnetic</em> visual experiences.</p>
          <div className="about-lower"><p>Part graphic designer, part motion artist and full-time believer in good ideas. I build visual systems that feel precise, expressive and impossible to scroll past.</p><a className="round-link" href="#contact">MORE ABOUT<br />THE PRACTICE <Arrow /></a></div>
        </div>
      </section>

      <section className="experience section-grid">
        <SectionHeading index="02" eyebrow="SELECTED EXPERIENCE" title={<>A few places<br />where the work <em>grew.</em></>} />
        <div className="experience-list">
          {[
            ['2025 — NOW', 'BOP REALTY GROUP', 'Visual designer / Video editor'],
            ['2024 — 2025', 'BLACK CHERIE MEDIA', 'Graphic designer / Motion artist'],
            ['2023 — 2024', 'URPOPULAR MEDIA', 'Creative editor'],
          ].map(([date, studio, role], i) => <article className="experience-row" data-attract data-cursor="VIEW" key={studio}><span>{date}</span><strong>{studio}</strong><em>{role}</em><b>0{i + 1}</b></article>)}
        </div>
      </section>

      <section className="skills">
        <div className="skills-top section-grid"><p>03 / CAPABILITIES</p><p>THE TOOLS ARE ONLY AS GOOD AS<br />THE POINT OF VIEW.</p></div>
        <div className="skill-marquee" aria-label="Capabilities">{skills.map((skill, index) => <span key={skill}>{skill}{index !== skills.length - 1 && <i>✦</i>}</span>)}</div>
        <div className="skills-grid">{skills.map((skill, index) => <div className="skill-cell" key={skill}><span>0{index + 1}</span><PaperPlane /><b>{skill}</b></div>)}</div>
      </section>

      <section id="projects" className="projects">
        <SectionHeading index="04" eyebrow="SELECTED WORK" title={<>Things made<br />to <em>stay with you.</em></>} className="section-grid" />
        <div className="feature-categories">
          <button className="feature-card creative-feature" data-cursor="OPEN" onClick={() => transition(() => setArchive('creative'))}><div className="feature-media" style={{ viewTransitionName: 'media-creative' }}><img src={asset(`/assets/images/${designProjects[0].asset}`)} alt="" /><div className="feature-glass" /></div><div className="feature-info"><span>01 / {String(designProjects.length).padStart(2, '0')} PROJECTS</span><h3>Creative<br /><em>Design</em></h3><p>Identities, campaigns, social systems and visual worlds.</p><Arrow /></div></button>
          <button className="feature-card motion-feature" data-cursor="PLAY" onClick={() => transition(() => setArchive('motion'))}><div className="feature-media" style={{ viewTransitionName: 'media-motion' }}><video src={asset(`/assets/videos/${motionProjects[0].asset}`)} muted autoPlay loop playsInline preload="metadata" /><div className="feature-glass" /></div><div className="feature-info"><span>02 / {String(motionProjects.length).padStart(2, '0')} PROJECTS</span><h3>Video<br /><em>Editing</em></h3><p>Films, edits, motion systems and stories with a pulse.</p><Arrow /></div></button>
          <button className="feature-card collection-feature illustration-feature" data-cursor="VIEW ALL" onClick={() => transition(() => setArchive('illustrations'))}>
            <div className="feature-media media-contain"><img src={asset("/assets/illustrations/iron man illustration.jpeg")} alt="Iron Man illustration" /><div className="feature-glass" /></div>
            <div className="feature-info"><span>03 / 05 ILLUSTRATIONS</span><h3>Digital<br /><em>Illustrations</em></h3><p>Character studies, fan art and original visual explorations.</p><b className="view-all">VIEW ALL <Arrow /></b></div>
          </button>
          <button className="feature-card collection-feature motion-graphics-feature" data-cursor="VIEW ALL" onClick={() => transition(() => setArchive('motion-graphics'))}>
            <div className="feature-media media-contain"><video src={asset("/assets/motion graphics/devansh bansal's motion graphic portfolio - 1080.mp4")} muted playsInline preload="metadata" /><div className="feature-glass" /></div>
            <div className="feature-info"><span>04 / 01 MOTION GRAPHICS</span><h3>Motion<br /><em>Graphics</em></h3><p>A complete motion-graphics portfolio reel.</p><b className="view-all">VIEW ALL <Arrow /></b></div>
          </button>
        </div>
      </section>

      <section className="services section-grid">
        <SectionHeading index="05" eyebrow="SERVICES" title={<>Built for the<br /><em>whole picture.</em></>} />
        <div className="service-stack">
          {['Brand strategy & identity', 'Campaign art direction', 'Motion graphics & films', 'Social content systems'].map((service, i) => <a href="#contact" key={service}><span>0{i + 1}</span><strong>{service}</strong><Arrow /></a>)}
        </div>
      </section>

      <section className="testimonial">
        <p>06 / KIND WORDS</p><div className="quote-mark">“</div><blockquote>Devansh has that rare ability to make an idea feel <em>larger than its brief.</em> Every detail arrives with intent.</blockquote><div className="quote-credit"><span>AKHIL SHARMA</span><span>FOUNDER, BOP REALTY GROUP</span></div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-sticker" data-attract><span>LET'S<br />MAKE<br />A MARK</span><i /></div>
        <p>07 / START A CONVERSATION</p>
        <h2>Let's design work<br />people <em>remember.</em></h2>
        <div className="contact-content">
          <p className="contact-intro">I'm always excited to collaborate on creative projects, branding, motion graphics, video editing, and visual storytelling.<br /><br />Whether you're a startup, agency, or growing business, let's create something meaningful together.</p>
          <p className="contact-availability">✨ CURRENTLY AVAILABLE FOR FREELANCE, FULL-TIME &amp; CREATIVE COLLABORATIONS</p>
          <div className="contact-cards">
            <a className="contact-card" data-attract data-cursor="MESSAGE" href="https://wa.me/917982504297" target="_blank" rel="noreferrer"><WhatsAppIcon /><span>WHATSAPP</span><strong>7982504297</strong><b>MESSAGE ME <Arrow /></b></a>
            <a className="contact-card" data-attract data-cursor="EMAIL" href="mailto:devanshb831@gmail.com"><MailIcon /><span>EMAIL</span><strong>devanshb831@gmail.com</strong><b>SEND AN EMAIL <Arrow /></b></a>
          </div>
          <a className="contact-cta" data-attract data-cursor="OPEN" href="https://wa.me/917982504297" target="_blank" rel="noreferrer">LET'S TALK <Arrow /></a>
        </div>
        <p className="contact-foot">FOR BRANDING, CAMPAIGNS, MOTION, FILM<br />AND THE OCCASIONAL BEAUTIFUL DETOUR.</p>
      </section>
    </main>
    <footer><a className="wordmark" href="#top">DEVANSH<span>®</span></a><p>© 2026 / ALL RIGHT, ALL RESERVED</p><div><a href="#">INSTAGRAM</a><a href="#">LINKEDIN</a><a href="#top">BACK TO TOP ↑</a></div></footer>
  </div>
}

createRoot(document.getElementById('root')!).render(<App />)
