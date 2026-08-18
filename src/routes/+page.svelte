<script>
    import Bsky from "$lib/components/Bsky.svelte";
    import Geo from "$lib/components/Geo.svelte";
    import GitHub from "$lib/components/GitHub.svelte";
    import LinkedIn from "$lib/components/LinkedIn.svelte";
    import Resume from "$lib/components/Resume.svelte";
    import Tag from "$lib/components/Tag.svelte";
    import Chris from "../lib/chris.jpg";
    import musicexe from "./musicexe.png";
    import musicwebapp from "./musicwebapp.png";
    import CV from "../ChristianBang_CV.pdf";
</script>

<div
    class="max-w-5xl prose-h1:lg:mb-0 prose-h1:py-0 prose prose-h4:py-0 md:py-20 px-4 prose-p:mt-0.5 backdrop-blur-lg prose-brown dark:prose-invert lg:prose-lg xl:prose-xl pt-4 xl:pt-8 mx-auto"
>
    <h1 class="text-center">Hello! I am Chris</h1>
    <div>
        <div class="flex flex-col md:flex-row items-center gap-2">
            <p class="lead">
                I love technology and have always been a technical sysadmin-type
                person. I have pivoting towards web and software development,
                largely due to discovering fullstack frameworks and how fun it
                is to make something both nice-looking and responsive, and also
                how smoothly it can be deployed to the web.
            </p>
            <div class="picandsocials flex flex-col gap-4">
                <div class="flex flex-row gap-4">
                    <img
                        class="aspect-square max-w-[150px] rounded-xl md:ml-8"
                        src={Chris}
                        alt="Chris"
                    />
                    <div class="tags flex-col flex gap-4 justify-center">
                        <a download href={CV}><Resume width={"w-8"} /></a>
                        <a href="https://github.com/spode"
                            ><GitHub width={"w-8"} /></a
                        >
                        <a href="https://www.linkedin.com/in/christianbaang/"
                            ><LinkedIn width={"w-8"} /></a
                        >
                        <a
                            href="https://bsky.app/profile/chrisbsides.bsky.social"
                            ><Bsky width={"w-8"} /></a
                        >
                    </div>
                </div>
                <div class="flex flex-row gap-2">
                    <Geo width={"w-8"} /><span>Uppsala, Sweden</span>
                </div>
            </div>
        </div>
    </div>

    <h3>Work History / Projects</h3>
    <h4>Internship, Fall 2025 & Spring 2026</h4>
    <div>
        <p>
            Was part of a team of fullstack-developer interns @ Knowit Östersund
            where we built a webapp around QR scanning and gathering data. It
            was built with ASP.NET backend and React frontend. I was primarily
            focused on backend user- and rolemanagement combined with AWS
            authentication, but I also took the opportunity to learn more React
            with combined with Shadcn components.
        </p>

        <div class="tags flex flex-wrap gap-2">
            <Tag>ASP.NET</Tag>
            <Tag>React</Tag>
            <Tag>shadcn/ui</Tag>
            <Tag>TailwindCSS</Tag>
            <Tag>TypeScript</Tag>
            <Tag>AWS</Tag>
        </div>
    </div>

    <div class="flex flex-col">
        <div class="flex md:flex-row flex-col">
            <div class="py-4">
                <h4>YT Playlist Player</h4>
                <p>
                    Webapp I made to play YouTube music playlists and quickly
                    toggle on/off, play next when song end, shuffle songs,
                    pick5random etc.
                </p>
                <div class="tags flex flex-wrap gap-2">
                    <Tag>Youtube API</Tag>
                    <Tag>YouTube Player API</Tag>
                    <Tag>SvelteKit</Tag>
                    <Tag>TypeScript</Tag>
                    <Tag>TailwindCSS</Tag>
                </div>
            </div>

            <img
                class="w-full md:w-[400px] h-auto object-cover rounded md:ml-4"
                src={musicwebapp}
                alt="ytplaylists webapp"
            />
        </div>
    </div>

    <div class="flex flex-col">
        <div class="flex md:flex-row flex-col">
            <img
                class="w-full md:w-[400px] h-auto md:mr-4 object-cover rounded"
                src={musicexe}
                alt="c# music player app"
            />
            <div class="py-4">
                <h4>Leaf Music Player</h4>
                <p>
                    C# WPF .NET 9 Application. I wanted to try out making an
                    offline .exe file application for playing local mp3s/flacs
                    on the PC and see how to make it more modern looking.
                </p>
                <div class="tags flex flex-wrap gap-2">
                    <Tag>C#</Tag>
                    <Tag>.NET 9</Tag>
                    <Tag>WPF</Tag>
                </div>
            </div>
        </div>
    </div>

    <h4>LoL Matchhistory</h4>
    <div>
        <p>
            Webapp I made to get an overview of my team's recent matchhistory to
            get a quick glance of the state of the team.
        </p>
        <div class="tags flex flex-wrap gap-2">
            <Tag>Riot Games API</Tag>
            <Tag>SvelteKit</Tag>
            <Tag>TailwindCSS</Tag>
        </div>
    </div>

    <h3>Studies</h3>
    <div>
        <h4>Systemutvecklare .NET @ YH Akademin, 2026</h4>
        <p>
            Made both fullstack Web-applications and traditional offline
            applications in .NET.
        </p>
        <div class="tags flex flex-wrap gap-2">
            <Tag>.NET C#</Tag>
            <Tag>Agile and Scrum</Tag>
            <Tag>Blazor</Tag>
            <Tag>Razor Pages</Tag>
            <Tag>React</Tag>
            <Tag>JavaScript</Tag>
            <Tag>HTML & CSS</Tag>
        </div>
        <h4>Game Design @ Uppsala Universitet, 2019</h4>
        <p>
            Studied Game Design at Uppsala University, Campus Gotland and got a
            Bachelors Degree. The programme was mostly focused on group project
            work but I also took extra programming courses to flesh out the
            degree.
        </p>
        <div class="tags flex flex-wrap gap-2">
            <Tag>Game Design theory</Tag>
            <Tag>Unity</Tag>
            <Tag>Level Design</Tag>
        </div>
        <h4>Computer Science @ Umeå Universitet, 2015</h4>
        <p>
            Studied programming in C, objectoriented programming in Java,
            HTML/CSS, maths and more.
        </p>
        <div class="tags flex flex-wrap gap-2">
            <Tag>Java</Tag>
            <Tag>C</Tag>
            <Tag>HTML & CSS</Tag>
            <Tag>JavaScript</Tag>
        </div>
    </div>
</div>

<svelte:head>
    <title>Chris, Fullstack Developer</title>
</svelte:head>
