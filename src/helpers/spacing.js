import addMediaQueries from '../utilities/addMediaQueries'

/**
 * Spacing
 *
 * @param  {object} limit, incrementBy, responsive
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function spacing({ helpers: { spacing: { limit, incrementBy, responsive } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Margin
     */
    selectors["ma"] = {
        "margin": "0.5rem"
    }
    selectors["mh05"] = {
        "margin-left": "0.5rem",
        "marginRight": "0.5rem",
    }
    selectors["mv05"] = {
        "marginTop": "0.5rem",
        "marginBottom": "0.5rem",
    }
    selectors["ml05"] = {
        "margin-left": "0.5rem"
    }
    selectors["mr05"] = {
        "marginRight": "0.5rem"
    }
    selectors["mb05"] = {
        "marginBottom": "0.5rem"
    }
    selectors["mt05"] = {
        "marginTop": "0.5rem"
    }

    for (let x = incrementBy; x <= limit; x += incrementBy) {
        selectors[`ma${ x }`] = {
            "margin": `${ x * incrementBy }rem`,
        }
        selectors[`mh${ x }`] = {
            "margin-left": `${ x * incrementBy }rem`,
            "marginRight": `${ x * incrementBy }rem`
        }
        selectors[`mv${ x }`] = {
            "marginTop": `${ x * incrementBy }rem`,
            "marginBottom": `${ x * incrementBy }rem`
        }
        selectors[`ml${ x }`] = {
            "margin-left": `${ x * incrementBy }rem`
        }
        selectors[`mr${ x }`] = {
            "marginRight": `${ x * incrementBy }rem`
        }
        selectors[`mt${ x }`] = {
            "marginTop": `${ x * incrementBy }rem`
        }
        selectors[`mb${ x }`] = {
            "marginBottom": `${ x * incrementBy }rem`
        }

        // Remove Margin
        selectors[`xmv`] = {
            "marginTop": "0",
            "marginBottom": "0"
        }
        selectors[`xmh`] = {
            "marginLeft": "0",
            "marginRight": "0"
        }
        selectors[`xmt`] = {
            "marginTop": "0"
        }
        selectors[`xmb`] = {
            "marginBottom": "0"
        }
        selectors[`xml`] = {
            "marginLeft": "0"
        }
        selectors[`xmr`] = {
            "marginRight": "0"
        }
    }

    /**
     * Padding
     */
    selectors["pa05"] = {
        padding: "0.5rem"
    }
    selectors["ph05"] = {
        "paddingLeft": "0.5rem",
        "paddingRight": "0.5rem",
    }
    selectors["pv05"] = {
        "paddingTop": "0.5rem",
        "paddingBottom": "0.5rem",
    }
    selectors["pl05"] = {
        "paddingLeft": "0.5rem"
    }
    selectors["pr05"] = {
        "paddingRight": "0.5rem"
    }
    selectors["pb05"] = {
        "paddingBottom": "0.5rem"
    }
    selectors["pt05"] = {
        "paddingTop": "0.5rem"
    }
    for (let x = 1; x <= limit; x++) {
        selectors[`pa${ x }`] = {
            "padding": `${ x * incrementBy }rem`,
        }
        selectors[`ph${ x }`] = {
            "paddingLeft": `${ x * incrementBy }rem`,
            "paddingRight": `${ x * incrementBy }rem`
        }
        selectors[`pv${ x }`] = {
            "paddingTop": `${ x * incrementBy }rem`,
            "paddingBottom": `${ x * incrementBy }rem`
        }
        selectors[`pl${ x }`] = {
            "paddingLeft": `${ x * incrementBy }rem`
        }
        selectors[`pr${ x }`] = {
            "paddingRight": `${ x * incrementBy }rem`
        }
        selectors[`pt${ x }`] = {
            "paddingTop": `${ x * incrementBy }rem`
        }
        selectors[`pb${ x }`] = {
            "paddingBottom": `${ x * incrementBy }rem`
        }

        // Remove Padding
        selectors[`xpv`] = {
            "paddingTop": "0",
            "paddingBottom": "0"
        }
        selectors[`xph`] = {
            "paddingLeft": "0",
            "paddingRight": "0"
        }
        selectors[`xpt`] = {
            "paddingTop": "0"
        }
        selectors[`xpb`] = {
            "paddingBottom": "0"
        }
        selectors[`xpl`] = {
            "paddingLeft": "0"
        }
        selectors[`xpr`] = {
            "paddingRight": "0"
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
