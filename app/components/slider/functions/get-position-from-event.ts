import { clamp } from '../../../../tasks/1_warmup/clamp'
import { MoveEvent } from '../slider.interface'

export const getPositionFromEvent = (event: MoveEvent, clientRect: ClientRect | null) => {
  let clientX = 0
  const width = (clientRect && clientRect.width) || 0
  const offset = (clientRect && clientRect.left) || 0

  if ('clientX' in event) {
    clientX = event.clientX
  } else if ('touches' in event) {
    clientX = event.touches[0].clientX
  }

  return clamp(clientX - offset, 0, width)
}
