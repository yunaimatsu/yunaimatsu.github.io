# Verbi

# Verbi

全て`-a/-ä` で終わる。

`-a/-ä` を取った状態がどのような文字列に

## 関数 `makeStem()` i/o集

| input | output | process |
| --- | --- | --- |
| `[STEM]` + `[VOWEL]a/[VOWEL]ä/da/dä` | `[STEM]`  | Delete the ending`[VOWEL]a/[VOWEL]ä/da/dä` |
| `[STEM]` + `la/lä/ra/rä/na/nä` | `[STEM]` + `e`  | Delete the last syllable and add `e` |
| `[STEM]` + `ta/tä` | `[STEM]` + `a/ä`  | Delete `t`  |
| `[STEM]` + `sta/stä` | `[STEM]` + `se`  | Delete `ta` `tä` and add `e` |

[Appendix:Finnish verb aspects - Wiktionary](https://en.m.wiktionary.org/wiki/Appendix:Finnish_verb_aspects#Causative)