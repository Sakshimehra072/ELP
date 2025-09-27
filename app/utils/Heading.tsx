'use client'

import { useEffect } from "react";

interface HeadProps{
    title: string;
    description: string;
    keywords: string;
}

const Heading: React.FC<HeadProps> = ({title, description, keywords}) => {
    useEffect(() => {
        document.title = title;

        // Update or create meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        } else {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            metaDescription.setAttribute('content', description);
            document.head.appendChild(metaDescription);
        }

        // Update or create meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', keywords);
        } else {
            metaKeywords = document.createElement('meta');
            metaKeywords.setAttribute('name', 'keywords');
            metaKeywords.setAttribute('content', keywords);
            document.head.appendChild(metaKeywords);
        }

        // Ensure viewport meta is present
        let viewportMeta = document.querySelector('meta[name="viewport"]');
        if (!viewportMeta) {
            viewportMeta = document.createElement('meta');
            viewportMeta.setAttribute('name', 'viewport');
            viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1');
            document.head.appendChild(viewportMeta);
        }
    }, [title, description, keywords]);

    return null;
};

export default Heading;
