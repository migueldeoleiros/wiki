import type { QuartzComponent } from "./types"
// @ts-ignore -- Quartz bundles inline browser scripts as strings.
import script from "./scripts/monochromeEmoji.inline"

// Resource-only component; content remains in the notes, not duplicated here.
const MonochromeEmoji: QuartzComponent = () => null
MonochromeEmoji.afterDOMLoaded = script
export default () => MonochromeEmoji
