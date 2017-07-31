import addMediaQueries from '../utilities/addMediaQueries'

/**
 * Flex
 *
 * @param  {object} responsive
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function flex({ helpers: { flex: { responsive } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Flexbox Helpers
     */
    selectors["flex"] = { "display": "flex" }
    selectors["iflex"] = { "display": "inline-flex" }
    selectors["flex-grow"] = { "flex-grow": 1 }

    // Flex Basis Helpers
    selectors["fb100"] = { "flexBasis": "100%" }

    // Flex Direction Helpers
    selectors["fdr"] = { "flexDirection": "row" }
    selectors["fdrr"] = { "flexDirection": "row-reverse" }
    selectors["fdc"] = { "flexDirection": "column" }
    selectors["fdcr"] = { "flexDirection": "column-reverse" }

    // Flex Wrap Helpers
    selectors["fwn"] = { "flexWrap": "nowrap" }
    selectors["fww"] = { "flexWrap": "wrap" }
    selectors["fwr"] = { "flexWrap": "wrap-reverse" }

    // Justification Helpers
    selectors["jcc"] = { "justifyContent": "center" }
    selectors["jcsb"] = { "justifyContent": "space-between" }
    selectors["jcsa"] = { "justifyContent": "space-around" }
    selectors["jcfs"] = { "justifyContent": "flex-start" }
    selectors["jcfe"] = { "justifyContent": "flex-end" }

    // Align Items Helpers
    selectors["aic"] = { "alignItems": "center" }
    selectors["aifs"] = { "alignItems": "flex-start" }
    selectors["aife"] = { "alignItems": "flex-end" }
    selectors["ais"] = { "alignItems": "stretch" }
    selectors["aib"] = { "alignItems": "baseline" }

    // Align Content Helpers
    selectors["acc"] = { "alignContent": "center" }
    selectors["acfs"] = { "alignContent": "flex-start" }
    selectors["acfe"] = { "alignContent": "flex-end" }
    selectors["acs"] = { "alignContent": "stretch" }
    selectors["acb"] = { "alignContent": "baseline" }


    /**
     * Media Queries
     */
    if (responsive) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
