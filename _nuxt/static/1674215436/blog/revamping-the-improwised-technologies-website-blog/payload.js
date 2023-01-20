__NUXT_JSONP__("/blog/revamping-the-improwised-technologies-website-blog", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return {data:[{blog:{id:b,status:"published",sort:a,date_created:"2022-11-23T10:03:04.431Z",date_updated:"2023-01-20T11:46:41.819Z",title:c,description:"\u003Cp\u003EAt Improwised Technologies, we believe in innovation and forward-thinking that lead to improvement and optimization. We strive to provide our customers with the most efficient and effective web solutions. So we set upon a humble journey to optimize and improve the process of our website.\u003C\u002Fp\u003E",seo_title:c,seo_description:"Let's see why, how, and what we changed on our website.",content:"\u003Cp\u003E\u003Cstrong\u003EWhy we needed a website revamp?&nbsp;\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp\u003EAs an evolving organization, it became the need of the hour to empower teams with flexibility and independence. We wanted to give each team the freedom to manage the needs of his departmental content.&nbsp;\u003C\u002Fp\u003E\n\u003Cp\u003EHowever, we didn&rsquo;t want to let go of the benefits of a static website like reliability, cost-effectiveness, ease of maintenance, and much better SEO.&nbsp;\u003C\u002Fp\u003E\n\u003Cp\u003ETo achieve the best of both worlds for the new website, we decided to use our forte of creating a tailor-made solution.&nbsp;\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cstrong\u003EA sneak into our tailor-made website solution&nbsp;\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fdata.improwised.com\u002Fassets\u002F9adbf376-bb7c-480f-8a2a-c02c5d8b7215\" alt=\"Image\" width=\"Auto\" height=\"500\" \u002F\u003E\u003C\u002Fp\u003E\n\u003Cp\u003EFirst of all, we decided to go with a content management system that is powerful and flexible that makes it easy for teams to manage content and keep it up to date.&nbsp;\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cstrong\u003EWhat made us choose the Directus CMS?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp\u003EAfter evaluating Strapi, Ghost &amp; Directus, we finalized to go with Directus as it fulfills the majority of our requirements. With its intuitive user interface, robust schema, and easy deployment process, teams can quickly and easily update content and keep their users informed.&nbsp;\u003C\u002Fp\u003E\n\u003Cp\u003EIt also allows teams to track changes to the content and view the content in a rich UI that helps users make more informed decisions.&nbsp;\u003C\u002Fp\u003E\n\u003Cp\u003EAll of the content created in Directus is powered by a secure REST API, meaning anything can be synced with our website or apps.&nbsp;\u003C\u002Fp\u003E\n\u003Cp\u003EThe core of all content management is the schema, after defining a customized schema we can add content.&nbsp;\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fdata.improwised.com\u002Fassets\u002F4ef2b511-7338-436d-96a1-e2fb91625c27\" alt=\"Content Screenshot\" width=\"838\" height=\"824\" \u002F\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cspan style=\"font-weight: 400;\"\u003EFinally, \u003C\u002Fspan\u003E\u003Cspan style=\"font-weight: 400;\"\u003Eby using this method, teams can easily roll out content without being concerned about the intricacies of the deployment process with a few clicks.&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cstrong\u003EWhy did a need to establish a review system arise?&nbsp;\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cspan style=\"font-weight: 400;\"\u003EAdministrators have granted individual teams access to their schemas. Communication and teamwork will be improved as a result. Administrative team members are able to manage their roles and responsibilities.\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cspan style=\"font-weight: 400;\"\u003EAlso, websites earlier did not have anything like CI\u002FCD (Continuous Integration\u002FContinuous Deployment), so if anything was pushed to master that would serve directly without any review system. So many times it added to the work of a developer.&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cspan style=\"font-weight: 400;\"\u003E\u003Cimg src=\"https:\u002F\u002Fdata.improwised.com\u002Fassets\u002F5908dd82-48a9-45f7-bfa5-69b8d8968683\" alt=\"Staging\" width=\"500\" height=\"625\" \u002F\u003E\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cspan style=\"font-weight: 400;\"\u003EIt led to an increased need to check for typos as well which is sometimes counterinitiative. So a need for a staging mechanism to verify all the content before those changes were made live and to add accountability for the content which is a much-needed request as the organization grows.\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cspan style=\"font-weight: 400;\"\u003ESo there you have it! After verification, production github action would be triggered manually, it would transfer the latest build to a public github repository. From there, Cloudflare provides a secure connection and GitHub Pages host the website.&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fdata.improwised.com\u002Fassets\u002Ff2a810f1-10c7-4bd0-bf64-4534d49960e2\" alt=\"Production\" width=\"500\" height=\"625\" \u002F\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cstrong\u003EHow we achieved the perfect blend of a dynamic and static website?&nbsp;\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cspan style=\"font-weight: 400;\"\u003EIn order to achieve a fully static website, we served assets from the repo in addition to using the API link in the src attribute. To accomplish this, custom logic was returned in async data. This logic was responsible for downloading assets from the API and saving them in the static folder when the Nuxt.js generate command was run.&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cspan style=\"font-weight: 400;\"\u003EBy doing this, we were able to preserve the benefits of static websites, such as faster load times and ease of maintenance.&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cspan style=\"font-weight: 400;\"\u003EThe Nuxt.js framework, supported by vue &amp; Directus API, is used to create the static website. Assets were consciously organized into categories based on how frequently they changed while the old theme was transferred to the new nuxt.js framework.\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cspan style=\"font-weight: 400;\"\u003EAssets with frequent changes went into Directus, while those that are permanently untouched status stays in the repo. For instance, the company address, technology stack, and logo.\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cspan style=\"font-weight: 400;\"\u003E\u003Cimg src=\"https:\u002F\u002Fdata.improwised.com\u002Fassets\u002F73141374-882c-426a-afc4-d87704462a23\" alt=\"blend of dynamic and static website\" width=\"640\" height=\"800\" \u002F\u003E\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cspan style=\"font-weight: 400;\"\u003EWe hope you like the new website and that it offers you a great experience. We strived to make our website more user-friendly and reliable.\u003C\u002Fspan\u003E\u003C\u002Fp\u003E",slug:"revamping-the-improwised-technologies-website-blog",user_created:{id:d,first_name:e,last_name:f,email:g,password:h,location:a,title:a,description:a,tags:a,avatar:a,language:i,theme:j,tfa_secret:a,status:k,role:l,token:a,last_access:m,last_page:n,provider:o,external_identifier:a,auth_data:a,email_notifications:p},user_updated:{id:d,first_name:e,last_name:f,email:g,password:h,location:a,title:a,description:a,tags:a,avatar:a,language:i,theme:j,tfa_secret:a,status:k,role:l,token:a,last_access:m,last_page:n,provider:o,external_identifier:a,auth_data:a,email_notifications:p},image:a,tags:[{id:22,blog_id:b,tags_id:{name:"Optimization"}}]},blogList:[],_img:{}}],fetch:{},mutations:[]}}(null,11,"Revamping the Improwised Technologies Website","a8418846-5723-4563-86df-99615438090f","Mansi","Pancholi","mansi@improwised.com","**********","en-US","auto","active","9d68ca39-0460-48bc-a533-6b999e303740","2023-01-20T11:45:26.898Z","\u002Fcontent\u002Fblog","default",true)));