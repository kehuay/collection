import { presetAttributify, presetUno, defineConfig, presetIcons } from 'unocss'
import transformerVariantGroup from "@unocss/transformer-variant-group"

export default defineConfig({
    presets: [
        presetAttributify(),
        presetUno(),
        presetIcons()
    ],
    transformers: [
        transformerVariantGroup()
    ]
})