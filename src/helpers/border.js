import addMediaQueries from '../utilities/addMediaQueries'

/**
 * Borders
 *
 * @param  {Number} limit=10
 * @param  {object} limit, incrementBy, responsive
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function border({ helpers: { border: { limit, incrementBy, responsive } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Borders
     */
    selectors["xbrdr"] = {
        border: "none"
    }

    for (let x = 1; x <= limit; x++) {
        selectors[`brdr${ x }`] = {
            "borderStyle": "solid",
            "borderWidth": `${ x }px`,
        }

        selectors[`brdr${ x }--top`] = {
            "borderTopStyle": "solid",
            "borderTopWidth": `${ x }px`,
        }

        selectors[`brdr${ x }--right`] = {
            "borderRightStyle": "solid",
            "borderRightWidth": `${ x }px`,
        }

        selectors[`brdr${ x }--bottom`] = {
            "borderBottomStyle": "solid",
            "borderBottomWidth": `${ x }px`,
        }

        selectors[`brdr${ x }--left`] = {
            "borderLeftStyle": "solid",
            "borderLeftWidth": `${ x }px`,
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
