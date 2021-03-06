import React from "react"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"
import H2 from "../components/elements/H2"
import H3 from "../components/elements/H3"
import Code from "../components/elements/Code"
import Copy from "../components/elements/Copy"

/**
 * Overview Page
 */
const snippet1 = `<script>
import React from "react";
import Neckbeard from "neckbeard";

// Instantiates Neckbeard and returns a function
// that accepts a string of approved helpers.
const nb = Neckbeard.create();

const Button = ({ children }) => (
    // Pass a string of helper classes
    // to be injected into the page.
    <button className={ nb("bg1 tcw br3 ft4") }>
        { children }
    </button>
)

export default Button
</script>
`
const Installation = () => (
    <div>
        <H1>Overview</H1>
        <H2>Why Neckbeard?</H2>
        <Copy>
            Neckbeard is an Atomic CSS in JS framework that leverages the composibility nature of helper (utility) classes and the awesome power of <a href="https://github.com/Khan/aphrodite" className={ nb("tc5 xtd h-tc1") }>Aphrodite</a> to rapidly build components.
            Neckbeard is created by <a href="https://www.twitter.com/andrewdelprete" className={ nb("tc5 xtd h-tc1") }>@andrewdelprete</a> and <a href="https://www.twitter.com/colinhoweth" className={ nb("tc5 xtd h-tc1") }>@colinhoweth</a> and highly inspired by <a href="https://www.buildwithbeard.com" className={ nb("tc5 xtd h-tc1") }>Beard CSS</a> and mimics much of the same syntax as Beard.
            The main difference is Neckbeard is built with Javascript and Beard is built with SCSS. Using Javascript to build a CSS framework allows us to do some
            fantastic things.
        </Copy>
        <H3>Helper Classes</H3>
        <Copy>
            A Helper Class is a very flat and simple method for applying aesthetic styles to HTML elements. These classes can be used in numerous contexts and are optimal for
            composing small to large components or sprinkling throughout your site or application. Neckbeard provides a Helper Class for just about everything you can think
            of and is extensible per project if custom classes are necessary.
        </Copy>
        <Copy>
            An example of a Helper Class to add spacing looks like <Code>.pv1</Code> which translates to <Code>padding-top: 1rem; padding-bottom: 1rem;</Code>.
            These helper classes can be composed to create complex ui elements. The code blocks that you see in this very paragraph are
            styled using a group of helper classes <Code>.ft3.brdr1.br2.bcg10.bgg05.pv05.ph1</Code> and in fact, every piece of styling on this
            site is made using a similar grouping of helpers.
        </Copy>
        <H3>CSS in JS</H3>
        <Copy>
            CSS in JS is a fairly new practice in which we write CSS in our JS as an object and load styles on the page dynamically. Because the CSS syntax is fairly JSONish to begin with, using Javascript
            just makes sense. Javascript gives us the power of a real programming language to generate, extend, and compose CSS classes. Tools like SCSS and LESS are great but feel limiting at times.
        </Copy>
        <Copy>
            We use ReactJS in our examples, however Neckbeard is framework agnostic and can be used anywhere Javascript is used to add CSS classes.
        </Copy>
        <Copy>
            Neckbeard wraps the library <a href="https://github.com/Khan/aphrodite" className={ nb("tc5 xtd h-tc1") }>Aphrodite</a> under the hood. Aphrodite is used to only apply the styles you're actually using to the page.
        </Copy>
        <H3>The Magical Unicorn 🦄</H3>
        <Copy>
            When we combine the Helper Classes and the CSS in JS concepts together something magical happen:
            <div className={ nb("ph1 pt1 tcg40 sm-mb1 md-xmb") }>- It works great with component based libraries / frameworks like ReactJS because you can couple style + component in the same file together forever in harmony.</div>
            <div className={ nb("ph1 tcg40 sm-mb1 md-xmb") }>- In the case with something like ReactJS, your component name IS all you are concerned with.</div>
            <div className={ nb("ph1 tcg40 sm-mb1 md-xmb") }>- No more global CSS scope.</div>
            <div className={ nb("ph1 tcg40 sm-mb1 md-xmb") }>- No longer worry about naming CSS selectors.</div>
            <div className={ nb("ph1 tcg40 sm-mb1 md-xmb") }>- No namespacing to try and establish block level elements.</div>
            <div className={ nb("ph1 tcg40 sm-mb1 md-xmb") }>- No cascading styles and CSS specificity issues.</div>
        </Copy>

        <div className={ nb("mb1") }>
            <H3>Example in ReactJS</H3>
        </div>

        <Highlight className={ nb("pa2 lh5 ft4 mb2") }>
            { snippet1 }
        </Highlight>
        <Copy>
            <span className={ nb('fwsemibold') }>*Note</span> - The <Code>{ "<script></script>" }</Code> tags in these examples are for highlighting purposes only.
        </Copy>
    </div>
)

export default Installation
