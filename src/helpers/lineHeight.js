import addMediaQueries from '../utilities/addMediaQueries'

/**
 * Line Height
 *
 * @param  {object} responsive
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function lineHeight({ helpers: { lineHeight: { responsive, limit, incrementBy } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Line Height Helpers
     */
    selectors["lh1"] = {
        "lineHeight": "1"
    }

    for (let x = 2; x <= limit; x++) {
        selectors[`lh${ x }`] = {
            "lineHeight": `${ 1 + (x - .1) * incrementBy }`
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
