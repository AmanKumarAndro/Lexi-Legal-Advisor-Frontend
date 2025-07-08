import React, { useState } from 'react';
import { Search, FileText, ExternalLink, Loader2 } from 'lucide-react';

const Lexi = () => {
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const Response = {
        answer: "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In *Dani Devi v. Pritam Singh*, the Court held that **10% of the deceased's annual income** should be added as future prospects.",
        citations: [
            {   
                text: "as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.",
                source: "Dani Vs Pritam (Future 10 at age 54-55).pdf",
                paragraph: "Para 7",
                link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz"
            }
        ]
    };

    const handleSubmit = async () => {
        if (!query) return;

        setIsLoading(true);

        setTimeout(() => {
            setResponse(Response);
            setIsLoading(false);
        }, 2000);
    };

    const handleCitationClick = (citation) => {
        window.open(citation.link, '_blank');

        console.log(`Opening PDF`);
    };


    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Lexi Legal Assistant</h1>
                    <p className="text-gray-600">Ask legal questions and get answers with verified citations</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div>
                        <div className="mb-4">
                            <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-2">
                                You Query
                            </label>
                            <textarea
                                id="query"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Enter your question here..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                rows={4}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && e.ctrlKey) {
                                        handleSubmit(e);
                                    }
                                }}
                            />
                        </div>
                        <button
                            onClick={handleSubmit}
                            disabled={!query || isLoading}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="animate-spin w-4 h-4 mr-2" />
                                    Analyzing...
                                </>
                            ) : (
                                <>
                                    <Search className="w-4 h-4 mr-2" />
                                    Submit Query
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* response Section */}
                {response && (
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 shadow-2xl mt-6">
                        <div className="flex items-center mb-4">
                            <FileText className="w-5 h-5 text-blue-600 mr-2" />
                            <h2 className="text-xl font-semibold text-gray-900">Look What I found</h2>
                        </div>

                        <div
                            className="text-gray-700 leading-relaxed mb-6"

                        >
                            {response.answer}
                        </div>
                        <div className="border-t pt-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Citations</h3>
                            {response.citations.map((citation, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 rounded-lg p-4 mb-4 border-4 border-blue-500"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <p className="text-gray-700 italic mb-2">
                                                "{citation.text}"
                                            </p>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <FileText className="w-4 h-4 mr-1" />
                                                <span className="mr-2">{citation.source}</span>
                                                <span className="mr-2">•</span>
                                                <span>{citation.paragraph}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleCitationClick(citation)}
                                            className="ml-4 bg-blue-100 text-blue-700 px-3 py-1 rounded-md hover:bg-blue-200 transition-colors flex items-center text-sm"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-1" />
                                            View Source
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                
            </div>
        </div>
    );
};

export default Lexi;