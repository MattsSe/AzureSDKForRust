(function() {var implementors = {};
implementors["azure_sdk_for_rust"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.3/serde_json/error/struct.Error.html\" title=\"struct serde_json::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/errors/enum.AzureError.html\" title=\"enum azure_sdk_for_rust::azure::core::errors::AzureError\">AzureError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://docs.rs/hyper/0.11.6/hyper/error/enum.Error.html\" title=\"enum hyper::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/errors/enum.AzureError.html\" title=\"enum azure_sdk_for_rust::azure::core::errors::AzureError\">AzureError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">IOError</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/errors/enum.AzureError.html\" title=\"enum azure_sdk_for_rust::azure::core::errors::AzureError\">AzureError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;XMLError&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/errors/enum.AzureError.html\" title=\"enum azure_sdk_for_rust::azure::core::errors::AzureError\">AzureError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"azure_sdk_for_rust/azure/core/errors/struct.UnexpectedHTTPResult.html\" title=\"struct azure_sdk_for_rust::azure::core::errors::UnexpectedHTTPResult\">UnexpectedHTTPResult</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/errors/enum.AzureError.html\" title=\"enum azure_sdk_for_rust::azure::core::errors::AzureError\">AzureError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/errors/enum.TraversingError.html\" title=\"enum azure_sdk_for_rust::azure::core::errors::TraversingError\">TraversingError</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/errors/enum.AzureError.html\" title=\"enum azure_sdk_for_rust::azure::core::errors::AzureError\">AzureError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/struct.ParseIntError.html\" title=\"struct core::num::ParseIntError\">ParseIntError</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/errors/enum.AzureError.html\" title=\"enum azure_sdk_for_rust::azure::core::errors::AzureError\">AzureError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/range/enum.ParseError.html\" title=\"enum azure_sdk_for_rust::azure::core::range::ParseError\">ParseError</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/errors/enum.AzureError.html\" title=\"enum azure_sdk_for_rust::azure::core::errors::AzureError\">AzureError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/enumerations/enum.ParsingError.html\" title=\"enum azure_sdk_for_rust::azure::core::enumerations::ParsingError\">ParsingError</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/errors/enum.AzureError.html\" title=\"enum azure_sdk_for_rust::azure::core::errors::AzureError\">AzureError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://docs.rs/url/1.5.1/url/parser/enum.ParseError.html\" title=\"enum url::parser::ParseError\">URLParseError</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/errors/enum.AzureError.html\" title=\"enum azure_sdk_for_rust::azure::core::errors::AzureError\">AzureError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/hyper/0.11.6/hyper/uri/struct.UriError.html\" title=\"struct hyper::uri::UriError\">UriError</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/errors/enum.AzureError.html\" title=\"enum azure_sdk_for_rust::azure::core::errors::AzureError\">AzureError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/chrono/0.4.0/chrono/format/struct.ParseError.html\" title=\"struct chrono::format::ParseError\">ParseError</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/errors/enum.AzureError.html\" title=\"enum azure_sdk_for_rust::azure::core::errors::AzureError\">AzureError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/str/struct.Utf8Error.html\" title=\"struct core::str::Utf8Error\">Utf8Error</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/errors/enum.AzureError.html\" title=\"enum azure_sdk_for_rust::azure::core::errors::AzureError\">AzureError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.FromUtf8Error.html\" title=\"struct alloc::string::FromUtf8Error\">FromUtf8Error</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/errors/enum.AzureError.html\" title=\"enum azure_sdk_for_rust::azure::core::errors::AzureError\">AzureError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/native-tls/0.1.4/native_tls/struct.Error.html\" title=\"struct native_tls::Error\">Error</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/errors/enum.AzureError.html\" title=\"enum azure_sdk_for_rust::azure::core::errors::AzureError\">AzureError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/chrono/0.4.0/chrono/format/struct.ParseError.html\" title=\"struct chrono::format::ParseError\">ParseError</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/errors/enum.TraversingError.html\" title=\"enum azure_sdk_for_rust::azure::core::errors::TraversingError\">TraversingError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/struct.ParseIntError.html\" title=\"struct core::num::ParseIntError\">ParseIntError</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/errors/enum.TraversingError.html\" title=\"enum azure_sdk_for_rust::azure::core::errors::TraversingError\">TraversingError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/enumerations/enum.ParsingError.html\" title=\"enum azure_sdk_for_rust::azure::core::enumerations::ParsingError\">ParsingError</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/errors/enum.TraversingError.html\" title=\"enum azure_sdk_for_rust::azure::core::errors::TraversingError\">TraversingError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">()</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/errors/enum.AzureError.html\" title=\"enum azure_sdk_for_rust::azure::core::errors::AzureError\">AzureError</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"azure_sdk_for_rust/azure/core/ba512_range/struct.BA512Range.html\" title=\"struct azure_sdk_for_rust::azure::core::ba512_range::BA512Range\">BA512Range</a>&gt; for <a class=\"struct\" href=\"azure_sdk_for_rust/azure/core/range/struct.Range.html\" title=\"struct azure_sdk_for_rust::azure::core::range::Range\">Range</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/struct.ParseIntError.html\" title=\"struct core::num::ParseIntError\">ParseIntError</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/range/enum.ParseError.html\" title=\"enum azure_sdk_for_rust::azure::core::range::ParseError\">ParseError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/struct.ParseIntError.html\" title=\"struct core::num::ParseIntError\">ParseIntError</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/ba512_range/enum.ParseError.html\" title=\"enum azure_sdk_for_rust::azure::core::ba512_range::ParseError\">ParseError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/ba512_range/enum.Not512ByteAlignedError.html\" title=\"enum azure_sdk_for_rust::azure::core::ba512_range::Not512ByteAlignedError\">Not512ByteAlignedError</a>&gt; for <a class=\"enum\" href=\"azure_sdk_for_rust/azure/core/ba512_range/enum.ParseError.html\" title=\"enum azure_sdk_for_rust::azure::core::ba512_range::ParseError\">ParseError</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"azure_sdk_for_rust/azure/cosmos/query/struct.Query.html\" title=\"struct azure_sdk_for_rust::azure::cosmos::query::Query\">Query</a>&lt;'a&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
