import { motion, useScroll, useTransform } from 'framer-motion'

export default function BackgroundLayers() {
  const { scrollY } = useScroll()
  const gridY = useTransform(scrollY, [0, 800], [0, 80])
  const barsY = useTransform(scrollY, [0, 1200], [0, 120])
  const glowOpacity = useTransform(scrollY, [0, 400], [0.4, 0.15])

  return (
    <div className="bg-layers" aria-hidden="true">
      <div className="bg-layers__base" />
      <motion.div className="bg-layers__grid" style={{ y: gridY }} />
      <motion.div className="bg-layers__bars" style={{ y: barsY }} />
      <motion.div className="bg-layers__glow bg-layers__glow--center" style={{ opacity: glowOpacity }} />
      <div className="bg-layers__grain" />
    </div>
  )
}
