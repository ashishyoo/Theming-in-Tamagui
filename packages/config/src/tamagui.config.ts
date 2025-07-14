import { defaultConfig, themes } from '@tamagui/config/v4'
import { createTamagui, type TamaguiInternalConfig } from 'tamagui'
import { bodyFont, headingFont } from './fonts'
import { animations } from './animations'

const dark_blue = {
  background: '#000066',
  color: '#ffffff',
  color10: '#aaaaaa',
  color12: '#ffffff',
  shadow4: 'rgba(255,255,255,0.4)',
  color8: '#777777',
  color2: '#333366',
  blue10: '#1e90ff',
  colorFocus: '#1e90ff',
}

const dark_green = {
  background: '#006600',
  color: '#ffffff',
  color10: '#aaaaaa',
  color12: '#ffffff',
  shadow4: 'rgba(255,255,255,0.4)',
  color8: '#777777',
  color2: '#336633',
  blue10: '#1e90ff',
  colorFocus: '#1e90ff',
}

const dark_red = {
  background: '#660000',
  color: '#ffffff',
  color10: '#aaaaaa',
  color12: '#ffffff',
  shadow4: 'rgba(255,255,255,0.4)',
  color8: '#777777',
  color2: '#663333',
  blue10: '#1e90ff',
  colorFocus: '#1e90ff',
}

const dark_yellow = {
  background: '#666600',
  color: '#ffffff',
  color10: '#aaaaaa',
  color12: '#ffffff',
  shadow4: 'rgba(255,255,255,0.4)',
  color8: '#777777',
  color2: '#666633',
  blue10: '#1e90ff',
  colorFocus: '#1e90ff',
}

const light_blue = {
  background: '#e6e6ff',
  color: '#000000',
  color10: '#666666',
  color12: '#000000',
  shadow4: 'rgba(0,0,0,0.4)',
  color8: '#888888',
  color2: '#f0f0ff',
  blue10: '#007bff',
  colorFocus: '#007bff',
}

const light_green = {
  background: '#e6ffe6',
  color: '#000000',
  color10: '#666666',
  color12: '#000000',
  shadow4: 'rgba(0,0,0,0.4)',
  color8: '#888888',
  color2: '#f0fff0',
  blue10: '#007bff',
  colorFocus: '#007bff',
}

const light_red = {
  background: '#e7b8b8',
  color: '#000000',
  color10: '#666666',
  color12: '#000000',
  shadow4: 'rgba(0,0,0,0.4)',
  color8: '#888888',
  color2: '#fff0f0',
  blue10: '#007bff',
  colorFocus: '#007bff',
}

const light_yellow = {
  background: '#ffffe6',
  color: '#000000',
  color10: '#666666',
  color12: '#000000',
  shadow4: 'rgba(0,0,0,0.4)',
  color8: '#888888',
  color2: '#fffff0',
  blue10: '#007bff',
  colorFocus: '#007bff',
}

export const config = createTamagui({
  ...defaultConfig,
  themes: {
    ...themes,
    dark_blue,
    dark_green,
    dark_red,
    dark_yellow,
    light_blue,
    light_green,
    light_red,
    light_yellow,
  },
  animations,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  settings: {
    ...defaultConfig.settings,
    onlyAllowShorthands: false,
  },
}) satisfies TamaguiInternalConfig

export default config

export type Conf = typeof config
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
