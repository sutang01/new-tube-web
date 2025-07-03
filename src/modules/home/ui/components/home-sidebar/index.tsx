import { MainSection } from "./main-setion"
import { Separator } from "@/components/ui/separator"
import { PersonalSection } from "./personal-section"
import { Sidebar, SidebarContent } from "@/components/ui/sidebar"

export const HomeSidebar = () => {
    return (
        <Sidebar className="pt-16 z-40 border-none " collapsible="icon">
            <SidebarContent className="bg-background">
                <MainSection />
                <Separator />
                <PersonalSection />
            </SidebarContent>
        </Sidebar>
    )
}