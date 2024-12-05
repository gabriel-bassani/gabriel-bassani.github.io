import { useLanguage } from "../../contexts/language-context";
import { translations } from "../../translations";

export function TechnologiesSection() {
  const { language } = useLanguage();

    return (
        <>
            <h1 className="text-center mb-8 pt-10">Technologies I Use</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aut exercitationem doloribus a voluptatibus, expedita labore veniam. Necessitatibus, fuga optio. Repudiandae voluptatibus dolore mollitia veniam suscipit laborum nihil, doloribus cupiditate!</p>
            <h2 className="mt-10">Frontend</h2>
            <div className="flex flex-row gap-40 justify-center my-10">
                <div className="flex flex-col items-center">
                    <h3>Next JS</h3>
                    <img src="/assets/icons/nextjs.svg" alt="NextJS" width={80} />
                </div>
                <div className="flex flex-col items-center">
                    <h3>React JS/ React Native</h3>
                    <img src="/assets/icons/reactjs.svg" alt="ReactJS/Native" width={80} />
                </div>
                <div className="flex flex-col items-center">
                    <h3>Vue JS</h3>
                    <img src="/assets/icons/vue.svg" alt="VueJS" width={80} />
                </div>
                <div className="flex flex-col items-center">
                    <h3>Tailwind</h3>
                    <img src="/assets/icons/tailwind.svg" alt="Tailwind" width={80} />
                </div>
            </div>
            <div className="flex flex-row gap-40 justify-center my-10">
                <div className="flex flex-col items-center">
                    <h3>Angular</h3>
                    <img src="/assets/icons/angular.svg" alt="Angular" width={80} />
                </div>
                <div className="flex flex-col items-center">
                    <h3>Javascript</h3>
                    <img src="/assets/icons/js.svg" alt="Javascript" width={80} />
                </div>
                <div className="flex flex-col items-center">
                    <h3>Typescript</h3>
                    <img src="/assets/icons/typescript.svg" alt="Typescript" width={80} />
                </div>
            </div>
            <h2>Backend</h2>
            <div className="flex flex-row gap-40 justify-center my-10">
                <div className="flex flex-col items-center">
                    <h3>Node JS</h3>
                    <img src="/assets/icons/nodejs.svg" alt="NodeJS" width={80} />
                </div>
                <div className="flex flex-col items-center">
                    <h3>Nest JS</h3>
                    <img src="/assets/icons/nest.svg" alt="NestJS" width={80} />
                </div>
                <div className="flex flex-col items-center">
                    <h3>Django</h3>
                    <img src="/assets/icons/django.svg" alt="Django" width={80} />
                </div>
            </div>
            <div className="flex flex-row gap-40 justify-center my-10">
                <div className="flex flex-col items-center">
                    <h3>Laravel</h3>
                    <img src="/assets/icons/laravel.svg" alt="Laravel" width={80} />
                </div>
                <div className="flex flex-col items-center">
                    <h3>Spring</h3>
                    <img src="/assets/icons/spring.svg" alt="Spring" width={80} />
                </div>
            </div>
            <h2>Others</h2>
            <div className="flex flex-row gap-40 justify-center my-10">
                <div className="flex flex-col items-center">
                    <h3>PostgreSQL</h3>
                    <img src="/assets/icons/postgresql.svg" alt="PostgreSQL" width={80} />
                </div>
                <div className="flex flex-col items-center">
                    <h3>MongoDB</h3>
                    <img src="/assets/icons/mongodb.svg" alt="MongoDB" width={80} />
                </div>
                <div className="flex flex-col items-center">
                    <h3>MySQL</h3>
                    <img src="/assets/icons/mysql.svg" alt="MySQL" width={80} />
                </div>
            </div>
            <div className="flex flex-row gap-40 justify-center my-10">
                <div className="flex flex-col items-center">
                    <h3>Docker</h3>
                    <img src="/assets/icons/docker.svg" alt="Docker" width={80} />
                </div>
                <div className="flex flex-col items-center">
                    <h3>Git</h3>
                    <img src="/assets/icons/git-icon.svg" alt="Git" width={80} />
                </div>
                <div className="flex flex-col items-center">
                    <h3>Kubernetes</h3>
                    <img src="/assets/icons/kubernetes.svg" alt="Kubernetes" width={80} />
                </div>
            </div>
            <p className="px-40">
                {translations[language].technologies.bottom}
            </p>
            {/* <h2>Backend</h2> */}
        </>
    );
}
