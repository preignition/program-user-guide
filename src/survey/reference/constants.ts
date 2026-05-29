import { ClipT } from '../../types.ts'

export const port = process.env.PLAYWRIGHT_PORT || '7174'
export const baseUrl = `http://localhost:${port}`
export const surveyId = '3BBFzJneqakYoyDu02c2'

export const suffix = `s/edit/survey/${surveyId}/build/compose/survey/intro`
export const referenceRoot = 'docs/app/survey/reference'

export const menu: ClipT = {
  x: 0,
  y: 64,
  width: 256,
  height: 500,
}
export const treeGrid: ClipT = {
  x: 292,
  y: 84,
  width: 402,
  height: 976,
}
export const treeView: ClipT = {
  x: 702,
  y: 84,
  height: 976,
  width: 862,
}

// full content without menu
export const pageContent: ClipT = {
  x: 292,
  y: 84,
  height: 976,
  width: 1272,
}

export const toolbar: ClipT = {
  x: 0,
  y: 0,
  width: 1600,
  height: 64,
}

export const fabBar: ClipT = {
  x: 1000,
  y: 965,
  width: 580,
  height: 80,
}

export const dialog: ClipT = {
  x: 500,
  y: 160,
  width: 600,
  height: 760,
}
