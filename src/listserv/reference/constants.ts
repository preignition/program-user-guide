import { ClipT } from '../../types.ts'

export const port = process.env.PLAYWRIGHT_PORT || '7173'
export const baseUrl = `http://localhost:${port}`
export const listservAppPath = 'listserv-playwright/listserv'

export const referenceRoot = 'docs/app/listserv/reference'

export const topNav: ClipT = {
  x: 0,
  y: 0,
  width: 1600,
  height: 64,
}

export const drawerMenu: ClipT = {
  x: 0,
  y: 64,
  width: 256,
  height: 500,
}

export const pageContent: ClipT = {
  x: 292,
  y: 84,
  height: 976,
  width: 1272,
}

export const dialog: ClipT = {
  x: 400,
  y: 160,
  width: 800,
  height: 760,
}
