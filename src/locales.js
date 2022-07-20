const locales = [
    {
        "native": "English",
        "en": "English",
        "code": "en",
        "flag": "🇺🇸",
    },
    {
        "native": "Español",
        "en": "Spanish",
        "code": "es",
        "flag": "🇪🇸",
    },
    {
        "native": "Русский",
        "en": "Russian",
        "code": "ru",
        "flag": "🇷🇺",
    },
    {
        "native": "Português",
        "en": "Portugese",
        "code": "pt",
        "flag": "🇧🇷"
    },
    {
        "native": "Українська",
        "en": "Ukrainian",
        "code": "uk",
        "flag": "🇺🇦",
    },
    {
        "native": "Deutsch",
        "en": "German",
        "code": "de",
        "flag": "🇩🇪",
    },
    {
        "native": "Français",
        "en": "French",
        "code": "fr",
        "flag": "🇫🇷",
    },
    {
        "native": "Română",
        "en": "Romanian",
        "code": "ro",
        "flag": "🇷🇴",
    },
    {
        "native": "Türk",
        "en": "Turkish",
        "code": "tr",
        "flag": "🇹🇷",
    },
    {
        "native": "Srpski",
        "en": "Serbian",
        "code": "sr",
        "flag": "🇷🇸",
    },
    {
        "native": "Dansk",
        "en": "Danish",
        "code": "da",
        "flag": "🇩🇰",
    },
    {
        "native": "Български",
        "en": "Bulgarian",
        "code": "bg",
        "flag": "🇧🇬",
    },
    {
        "native": "فارسی",
        "en": "Persian",
        "code": "fa",
        "flag": "🇮🇷",
    },
    {
        "native": "日本語",
        "en": "Japanese",
        "code": "ja",
        "flag": "🇯🇵",
    },
    {
        "native": "Bahasa Indonesia",
        "en": "Indonesian",
        "code": "in",
        "flag": "🇮🇩",
    },
    {
        "native": "한국어",
        "en": "Korean",
        "code": "ko",
        "flag": "🇰🇷",
    },
    {
        "native": "Norsk",
        "en": "Norwegian",
        "code": "no",
        "flag": "🇳🇴",
    },
    {
        "native": "Bahasa Malaysia",
        "en": "Malay",
        "code": "ms",
        "flag": "🇲🇾",
    },
    {
        "native": "中文",
        "en": "Chinese",
        "code": "zh",
        "flag": "🇨🇳",
    },
    {
        "native": "عربى",
        "en": "Arabic",
        "code": "ar",
        "flag": "🇸🇦",
    },
    {
        "native": "Český",
        "en": "Czech",
        "code": "cs",
        "flag": "🇨🇿",
    },
    {
        "native": "עִברִית",
        "en": "Hebrew",
        "code": "he",
        "flag": "🇮🇱",
    },
    {
        "native": "नेपाली",
        "en": "Nepali",
        "code": "ne",
        "flag": "🇳🇵",
    },
    {
        "native": "Македонски",
        "en": "Macedonian",
        "code": "mk",
        "flag": "🇲🇰",
    },
    {
        "native": "Eesti Keel",
        "en": "Estonian",
        "code": "et",
        "flag": "🇪🇪",
    },
    {
        "native": "Viti",
        "en": "Fijian",
        "code": "fj",
        "flag": "🇫🇯",
    },
    {
        "native": "Magyar",
        "en": "Hungarian",
        "code": "hu",
        "flag": "🇭🇺",
    },
    {
        "native": "Italiano",
        "en": "Italian",
        "code": "it",
        "flag": "🇮🇹",
    },
    {
        "native": "ไทย",
        "en": "Thai",
        "code": "th",
        "flag": "🇹🇭",
    },
    {
        "native": "தமிழ்",
        "en": "Tamil",
        "code": "ta",
        "flag": "🇮🇳",
    },
    {
        "native": "Afrikaans",
        "en": "Afrikaans",
        "code": "af",
        "flag": "🇿🇦",
    },
    {
        "native": "Việt",
        "en": "Vietnamese",
        "code": "vi",
        "flag": "🇻🇳",
    },
    {
        "native": "Ελληνικά",
        "en": "Greek",
        "code": "el",
        "flag": "🇬🇷",
    },
    {
        "native": "ລາວ",
        "en": "Lao",
        "code": "lo",
        "flag": "🇱🇦",
    },
    {
        "native": "Polski",
        "en": "Polish",
        "code": "pl",
        "flag": "🇵🇱",
    },
    {
        "native": "Svenska",
        "en": "Swedish",
        "code": "sv",
        "flag": "🇸🇪",
    },
    {
        "native": "Lietuviškai",
        "en": "Lithuanian",
        "code": "lt",
        "flag": "🇱🇹",
    },
    {
        "native": "Sesotho",
        "en": "Sesotho",
        "code": "st",
        "flag": "🇱🇸",
    },
    {
        "native": "Hrvatski",
        "en": "Croatian",
        "code": "hr",
        "flag": "🇭🇷",
    },
    {
        "native": "Tagalog",
        "en": "Tagalog",
        "code": "tl",
        "flag": "🇵🇭",
    },
    {
        "native": "Kiswahili",
        "en": "Swahili",
        "code": "sw",
        "flag": "🇹🇿",
    },
    {
        "native": "Slovenščina",
        "en": "Slovenian",
        "code": "sl",
        "flag": "🇸🇮",
    },
    {
        "native": "Монгол хэл",
        "en": "Mongolian",
        "code": "mn",
        "flag": "🇲🇳",
    },
    {
        "native": "ქართული ენა",
        "en": "Georgian",
        "code": "ka",
        "flag": "🇬🇪",
    },
    {
        "native": "Slovenčina",
        "en": "Slovak",
        "code": "sk",
        "flag": "🇸🇰",
    },
    {
        "native": "Íslenska",
        "en": "Icelandic",
        "code": "is",
        "flag": "🇮🇸",
    },
    {
        "native": "Հայերեն",
        "en": "Armenian",
        "code": "hy",
        "flag": "🇦🇲",
    },
    {
        "native": "IsiZulu",
        "en": "Zulu",
        "code": "zu",
        "flag": "🇿🇦",
    },
    {
        "native": "IsiXhosa",
        "en": "Xhosa",
        "code": "xh",
        "flag": "🇿🇦",
    },
    {
        "native": "हिन्दी",
        "en": "Hindi",
        "code": "hi",
        "flag": "🇮🇳",
    },
    {
        "native": "Shqiptar",
        "en": "Albanian",
        "code": "sq",
        "flag": "🇦🇱",
    },
    {
        "native": "Latviešu valoda",
        "en": "Latvian",
        "code": "lv",
        "flag": "🇱🇻",
    },
    {
        "native": "Nederlandse taal",
        "en": "Dutch",
        "code": "nl",
        "flag": "🇳🇱",
    },
    {
        "native": "አማርኛ",
        "en": "Amharic",
        "code": "am",
        "flag": "🇪🇹",
    },
    {
        "native": "සිංහල",
        "en": "Sinhala",
        "code": "si",
        "flag": "🇱🇰",
    },
    {
        "native": "Ilokano",
        "en": "Ilocano",
        "code": "ilo",
        "flag": "🇵🇭",
    },
    {
        "native": "Hiligaynon",
        "en": "Hiligaynon",
        "code": "hil",
        "flag": "🇵🇭",
    },
    {
        "native": "Suomen kieli",
        "en": "Finnish",
        "code": "fi",
        "flag": "🇫🇮",
    },
    {
        "native": "မြန်မာဘာသာ",
        "en": "Burmese",
        "code": "my",
        "flag": "🇲🇲",
    },
    {
        "native": "ខ្មែរ",
        "en": "Khmer",
        "code": "km",
        "flag": "🇰🇭",
    },
    {
        "native": "Malagasy",
        "en": "Malagasy",
        "code": "mg",
        "flag": "🇮🇳",
    },
    {
        "native": "മലയാളം",
        "en": "Malayalam",
        "code": "ml",
        "flag": "🇮🇳",
    },
    {
        "native": "ಕನ್ನಡ",
        "en": "Kannada",
        "code": "kn",
        "flag": "🇮🇳",
    },
    {
        "native": "Batak Toba",
        "en": "Batak Toba",
        "code": "bbc",
        "flag": "🇮🇩",
    },
    {
        "native": "Kreyòl ayisyen",
        "en": "Haitian Creole",
        "code": "ht",
        "flag": "🇭🇹",
    },
    {
        "native": "Sinugboanon",
        "en": "Cebuano",
        "code": "ceb",
        "flag": "🇵🇭",
    },
    {
        "native": "తెలుగు",
        "en": "Telugu",
        "code": "te",
        "flag": "🇮🇳",
    },
    {
        "native": "Tedim Chin",
        "en": "Tedim Chin",
        "code": "ctd",
        "flag": "🇲🇲",
    },
    {
        "native": "Mizo ṭawng",
        "en": "Mizo",
        "code": "lus",
        "flag": "🇮🇳",
    },
    {
        "native": "मराठी",
        "en": "Marathi",
        "code": "mr",
        "flag": "🇮🇳",
    },
    {
        "native": "ଓଡ଼ିଆ",
        "en": "Odia",
        "code": "or",
        "flag": "🇮🇳",
    },
]

export default locales