import React, { Suspense } from 'react';
import SearchPageComponent from '../../../components/SearchPageComponent';

export default function SearchPage({ params }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchPageComponent params={params} />
        </Suspense>
    );
}
