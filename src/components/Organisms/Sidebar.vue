<template>
    <div class="p-4 text-gray-3 text-lg-1">
        <a href="/"><img class="w-28" src="/public/svg/logo.svg" alt="Logo"></a>
        <nav class="mt-10">
            <ul>
                <li>
                    <app-sidebar-link-vue to="/">Dashboard</app-sidebar-link-vue>
                </li>
                <li>
                    <app-sidebar-link-vue to="/" :count=5>Messages</app-sidebar-link-vue>
                </li>
            </ul>
        </nav>

        <h3 class="mt-10 mx-3 text-neutral-2 uppercase text-sm font-semibold">Land the job</h3>
        <nav>
            <ul>
                <li>
                    <app-sidebar-link-vue to="/">Assessment</app-sidebar-link-vue>
                </li>
                <li>
                    <app-sidebar-link-vue to="/">Document Prep</app-sidebar-link-vue>
                </li>
                <li>
                    <app-sidebar-link-vue to="/">Job Targeting</app-sidebar-link-vue>
                </li>
                <li>
                    <app-sidebar-link-vue to="/">Interview Prep</app-sidebar-link-vue>
                </li>
                <li>
                    <app-sidebar-link-vue to="/">Salary Negotiation</app-sidebar-link-vue>
                </li>
            </ul>
        </nav>
        <nav class=" mt-16">
            <ul>
                <li>
                    <app-sidebar-link-vue to="/">Assessment</app-sidebar-link-vue>
                </li>
                <li>
                    <app-sidebar-link-vue to="/">Document Prep</app-sidebar-link-vue>
                </li>
                <li>
                    <app-sidebar-link-vue to="/">Job Targeting</app-sidebar-link-vue>
                </li>
                <li>
                    <app-sidebar-link-vue to="/">Interview Prep</app-sidebar-link-vue>
                </li>
                <li>
                    <app-sidebar-link-vue to="/">Salary Negotiation</app-sidebar-link-vue>
                </li>
            </ul>
        </nav>
    </div>
    
</template>
<script>
    import AppSidebarLinkVue from "../Atoms/AppSidebarLink.vue"
   export default {
       components: {
           AppSidebarLinkVue
       }
   }
</script>