import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import buble from 'rollup-plugin-buble'

export default {
  entry: 'index.js'
, dest: 'ripple.pure.js'
, format: 'iife'
, moduleName: 'rijs'
, plugins: [
    replace({
      delimiters: ['','']
    , values: {
        "require('utilise/emitterify')": "window.emitterify"
      , "require('utilise/overwrite')": "window.overwrite"
      , "require('utilise/colorfill')": "window.colorfill"
      , "require('utilise/includes')": "window.includes"
      , "require('utilise/identity')": "window.identity"
      , "require('utilise/debounce')": "window.debounce"
      , "require('utilise/flatten')": "window.flatten"
      , "require('utilise/replace')": "window.replace"
      , "require('utilise/header')": "window.header"
      , "require('utilise/extend')": "window.extend"
      , "require('utilise/append')": "window.append"
      , "require('utilise/values')": "window.values"
      , "require('utilise/ready')": "window.ready"
      , "require('utilise/proxy')": "window.proxy"
      , "require('utilise/split')": "window.split"
      , "require('utilise/clone')": "window.clone"
      , "require('utilise/group')": "window.group"
      , "require('utilise/parse')": "window.parse"
      , "require('utilise/attr')": "window.attr"
      , "require('utilise/keys')": "window.keys"
      , "require('utilise/time')": "window.time"
      , "require('utilise/noop')": "window.noop"
      , "require('utilise/from')": "window.from"
      , "require('utilise/all')": "window.all"
      , "require('utilise/raw')": "window.raw"
      , "require('utilise/log')": "window.log"
      , "require('utilise/not')": "window.not"
      , "require('utilise/key')": "window.key"
      , "require('utilise/set')": "window.set"
      , "require('utilise/err')": "window.err"
      , "require('utilise/str')": "window.str"
      , "require('utilise/is')": "window.is"
      , "require('utilise/by')": "window.by"
      , "require('utilise/el')": "window.el"
      , "require('utilise/to')": "window.to"
      , "require('utilise/lo')": "window.lo"
      , "require('utilise/fn')": "window.fn"
      , "require('utilise/za')": "window.za"
      , "require('utilise/owner')": "window"
      , "require('utilise/client')": "true"
      }
    })
  , nodeResolve({ browser: true })
  , commonjs({
      ignoreGlobal: true
    })
  , buble()
  ]
}