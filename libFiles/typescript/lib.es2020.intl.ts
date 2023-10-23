const fileData = {
  fileName: `/lib.es2020.intl.d.ts`,
  // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
  text: '/// <reference no-default-lib="true"/>\n/// <reference lib="es2018.intl" />\ndeclare namespace Intl{type UnicodeBCP47LocaleIdentifier=string;type RelativeTimeFormatUnit=|"year"|"years"|"quarter"|"quarters"|"month"|"months"|"week"|"weeks"|"day"|"days"|"hour"|"hours"|"minute"|"minutes"|"second"|"seconds";type RelativeTimeFormatUnitSingular=|"year"|"quarter"|"month"|"week"|"day"|"hour"|"minute"|"second";type RelativeTimeFormatLocaleMatcher="lookup"|"best fit";type RelativeTimeFormatNumeric="always"|"auto";type RelativeTimeFormatStyle="long"|"short"|"narrow";type BCP47LanguageTag=string;type LocalesArgument=UnicodeBCP47LocaleIdentifier|Locale|readonly(UnicodeBCP47LocaleIdentifier|Locale)[]|undefined;interface RelativeTimeFormatOptions{localeMatcher?:RelativeTimeFormatLocaleMatcher;numeric?:RelativeTimeFormatNumeric;style?:RelativeTimeFormatStyle;}interface ResolvedRelativeTimeFormatOptions{locale:UnicodeBCP47LocaleIdentifier;style:RelativeTimeFormatStyle;numeric:RelativeTimeFormatNumeric;numberingSystem:string;}type RelativeTimeFormatPart=|{type:"literal";value:string;}|{type:Exclude<NumberFormatPartTypes,"literal">;value:string;unit:RelativeTimeFormatUnitSingular;};interface RelativeTimeFormat{format(value:number,unit:RelativeTimeFormatUnit):string;formatToParts(value:number,unit:RelativeTimeFormatUnit):RelativeTimeFormatPart[];resolvedOptions():ResolvedRelativeTimeFormatOptions;}const RelativeTimeFormat:{new(locales?:UnicodeBCP47LocaleIdentifier|UnicodeBCP47LocaleIdentifier[],options?:RelativeTimeFormatOptions,):RelativeTimeFormat;supportedLocalesOf(locales?:UnicodeBCP47LocaleIdentifier|UnicodeBCP47LocaleIdentifier[],options?:RelativeTimeFormatOptions,):UnicodeBCP47LocaleIdentifier[];};interface NumberFormatOptions{compactDisplay?:"short"|"long"|undefined;notation?:"standard"|"scientific"|"engineering"|"compact"|undefined;signDisplay?:"auto"|"never"|"always"|"exceptZero"|undefined;unit?:string|undefined;unitDisplay?:"short"|"long"|"narrow"|undefined;currencyDisplay?:string|undefined;currencySign?:string|undefined;}interface ResolvedNumberFormatOptions{compactDisplay?:"short"|"long";notation?:"standard"|"scientific"|"engineering"|"compact";signDisplay?:"auto"|"never"|"always"|"exceptZero";unit?:string;unitDisplay?:"short"|"long"|"narrow";currencyDisplay?:string;currencySign?:string;}interface DateTimeFormatOptions{calendar?:string|undefined;dayPeriod?:"narrow"|"short"|"long"|undefined;numberingSystem?:string|undefined;dateStyle?:"full"|"long"|"medium"|"short"|undefined;timeStyle?:"full"|"long"|"medium"|"short"|undefined;hourCycle?:"h11"|"h12"|"h23"|"h24"|undefined;}type LocaleHourCycleKey="h12"|"h23"|"h11"|"h24";type LocaleCollationCaseFirst="upper"|"lower"|"false";interface LocaleOptions{baseName?:string;calendar?:string;caseFirst?:LocaleCollationCaseFirst;collation?:string;hourCycle?:LocaleHourCycleKey;language?:string;numberingSystem?:string;numeric?:boolean;region?:string;script?:string;}interface Locale extends LocaleOptions{baseName:string;language:string;maximize():Locale;minimize():Locale;toString():BCP47LanguageTag;}const Locale:{new(tag:BCP47LanguageTag|Locale,options?:LocaleOptions):Locale;};type DisplayNamesFallback=|"code"|"none";type DisplayNamesType=|"language"|"region"|"script"|"calendar"|"dateTimeField"|"currency";type DisplayNamesLanguageDisplay=|"dialect"|"standard";interface DisplayNamesOptions{localeMatcher?:RelativeTimeFormatLocaleMatcher;style?:RelativeTimeFormatStyle;type:DisplayNamesType;languageDisplay?:DisplayNamesLanguageDisplay;fallback?:DisplayNamesFallback;}interface ResolvedDisplayNamesOptions{locale:UnicodeBCP47LocaleIdentifier;style:RelativeTimeFormatStyle;type:DisplayNamesType;fallback:DisplayNamesFallback;languageDisplay?:DisplayNamesLanguageDisplay;}interface DisplayNames{of(code:string):string|undefined;resolvedOptions():ResolvedDisplayNamesOptions;}const DisplayNames:{prototype:DisplayNames;new(locales:LocalesArgument,options:DisplayNamesOptions):DisplayNames;supportedLocalesOf(locales?:LocalesArgument,options?:{localeMatcher?:RelativeTimeFormatLocaleMatcher}):BCP47LanguageTag[];};}',
};

export default fileData;
