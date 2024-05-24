// transform spell source data object

let origEffect = source.effects.find(x => x.name == "Ignifaxius")

if(!origEffect) return

origEffect = foundry.utils.duplicate(origEffect)
source.effects = source.effects.filter(x => x.name != "Ignifaxius")

const lang = game.i18n.lang == "de" ? "de" : "en"
const dict = {
    de: {
        msg: "wurde in Brand gesteckt"
    },
    en: {
        msg: "was set on fire"
    }
}[lang]

// size does not matter for fire
origEffect.flags.dsa5.args3 = `msg += \` \${actor.name} ${dict.msg}.\`;\nawait actor.addCondition('burning')`
source.effects.push(origEffect)