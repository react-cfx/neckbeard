import addMediaQueries from '../utilities/addMediaQueries'

/**
 * Border Radius
 *
 * @param  {Number} limit=10
 * @param  {object} limit, incrementBy, responsive
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function borderRadius({ helpers: { borderRadius: { limit, incrementBy, responsive } }, breakpoints }) {

    let selectors = {}
    let media = {}

    /**
     * Borders
     */
    for (let x = 1; x <= limit; x++) {
        selectors[`br${ x }`] = {
            borderRadius: `${ x }px`
        }

        selectors[`brr${ x }`] = {
            "borderTopRight": `${ x }px`,
            "borderBottomRight": `${ x }px`
        }

        selectors[`blr${ x }`] = {
            "borderTopLeft": `${ x }px`,
            "borderBottomLeft": `${ x }px`
        }

        selectors[`btlr${ x }`] = {
            "borderTopLeft": `${ x }px`
        }

        selectors[`btrr${ x }`] = {
            "borderTopRight": `${ x }px`
        }

        selectors[`bblr${ x }`] = {
            "borderBottomLeft": `${ x }px`
        }

        selectors[`bbrr${ x }`] = {
            "borderBottomRight": `${ x }px`
        }
    }

    /**
     * Media Queries
     */
    if (responsive) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
