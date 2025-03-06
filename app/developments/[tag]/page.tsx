import { TagPage } from '@/app/component/portfolioPage/TagPage';
import React from 'react'

const DevelopmentsTagPage = ({ params }: { params: { tag: string } }) => (
   <TagPage page={'developments'} tag={params.tag}/>
);

export default DevelopmentsTagPage;