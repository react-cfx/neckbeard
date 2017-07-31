import addMediaQueries from '../utilities/addMediaQueries'

/**
 * Colors
 *
 * @param  {object} responsive
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function colors({ helpers: { colors: { responsive } }, colors, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Colors
     */
    // Background colors
    selectors["bgb"] = { "backgroundColor": colors.b }
    selectors["bgw"] = { "backgroundColor": colors.w }
    selectors["bg1"] = { "backgroundColor": colors.brandColor }
    selectors["bg2"] = { "backgroundColor": colors.brandColor2 }
    selectors["bg3"] = { "backgroundColor": colors.brandColor3 }
    selectors["bg4"] = { "backgroundColor": colors.brandColor4 }
    selectors["bg5"] = { "backgroundColor": colors.brandColor5 }
    selectors["bgsuccess"] = { "backgroundColor": colors.success }
    selectors["bgwarning"] = { "backgroundColor": colors.warning }
    selectors["bgdanger"] = { "backgroundColor": colors.danger }

    // Text colors
    selectors["tcb"] = { "color": colors.b }
    selectors["tcw"] = { "color": colors.w }
    selectors["tc1"] = { "color": colors.brandColor }
    selectors["tc2"] = { "color": colors.brandColor2 }
    selectors["tc3"] = { "color": colors.brandColor3 }
    selectors["tc4"] = { "color": colors.brandColor4 }
    selectors["tc5"] = { "color": colors.brandColor5 }
    selectors["tcsuccess"] = { "color": colors.success }
    selectors["tcwarning"] = { "color": colors.warning }
    selectors["tcdanger"] = { "color": colors.danger }


    // Border colors
    selectors["bcb"] = { "borderColor": colors.b }
    selectors["bcw"] = { "borderColor": colors.w }
    selectors["bc1"] = { "borderColor": colors.brandColor }
    selectors["bc2"] = { "borderColor": colors.brandColor2 }
    selectors["bc3"] = { "borderColor": colors.brandColor3 }
    selectors["bc4"] = { "borderColor": colors.brandColor4 }
    selectors["bc5"] = { "borderColor": colors.brandColor5 }
    selectors["bcsuccess"] = { "borderColor": colors.success }
    selectors["bcwarning"] = { "borderColor": colors.warning }
    selectors["bcdanger"] = { "borderColor": colors.danger }

    // Background Colors Gray
    // ------------------------------------------------------------------------------------ */
    selectors["bgg05"] = { "backgroundColor": colors.g05 }
    selectors["bgg10"] = { "backgroundColor": colors.g10 }
    selectors["bgg20"] = { "backgroundColor": colors.g20 }
    selectors["bgg30"] = { "backgroundColor": colors.g30 }
    selectors["bgg40"] = { "backgroundColor": colors.g40 }
    selectors["bgg50"] = { "backgroundColor": colors.g50 }
    selectors["bgg60"] = { "backgroundColor": colors.g60 }
    selectors["bgg70"] = { "backgroundColor": colors.g70 }
    selectors["bgg80"] = { "backgroundColor": colors.g80 }
    selectors["bgg90"] = { "backgroundColor": colors.g90 }

    // Text Colors Gray
    // ------------------------------------------------------------------------------------ */
    selectors["tcg05"] = { "color": colors.g05 }
    selectors["tcg10"] = { "color": colors.g10 }
    selectors["tcg20"] = { "color": colors.g20 }
    selectors["tcg30"] = { "color": colors.g30 }
    selectors["tcg40"] = { "color": colors.g40 }
    selectors["tcg50"] = { "color": colors.g50 }
    selectors["tcg60"] = { "color": colors.g60 }
    selectors["tcg70"] = { "color": colors.g70 }
    selectors["tcg80"] = { "color": colors.g80 }
    selectors["tcg90"] = { "color": colors.g90 }

    // Border Colors Gray
    // ------------------------------------------------------------------------------------ */
    selectors["bcg05"] = { borderColor: colors.g05 }
    selectors["bcg10"] = { borderColor: colors.g10 }
    selectors["bcg20"] = { borderColor: colors.g20 }
    selectors["bcg30"] = { borderColor: colors.g30 }
    selectors["bcg40"] = { borderColor: colors.g40 }
    selectors["bcg50"] = { borderColor: colors.g50 }
    selectors["bcg60"] = { borderColor: colors.g60 }
    selectors["bcg70"] = { borderColor: colors.g70 }
    selectors["bcg80"] = { borderColor: colors.g80 }
    selectors["bcg90"] = { borderColor: colors.g90 }

    /**
     * Hover, Focus, and Active Color Helpers
     */
    Object.keys(selectors).map(selector => {
        selectors[`h-${ selector }`] = {
            ":hover": selectors[selector]
        }
        selectors[`a-${ selector }`] = {
            ":active": selectors[selector]
        }
        selectors[`f-${ selector }`] = {
            ":focus": selectors[selector]
        }
    })

    /**
     * Media Queries
     */
    if (responsive) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
