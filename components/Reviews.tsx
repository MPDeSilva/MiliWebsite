import Container from "./Container";
import Card from "./Card";
import Image from "next/image.js";

export default function Reviews() {
  return (
    <div
      className="pt-20 md:pt-40 text-gray-600 dark:text-gray-300"
      id="references"
    >
      <Container>
        <div className="mx-auto md:w-3/5">
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            Trusted by... some people
          </h2>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
            I haven't met everyone in the world just yet but the ones I have got
            this to say
          </p>
        </div>
        <div className="mt-12 md:mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-6">
            <Card>
              <div className="flex gap-4">
                <Image
                  className="h-12 w-12 rounded-full"
                  src="/images/colleagues/Judith.webp"
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                    Judith Navarro
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Digital Marketing Manager
                  </p>
                </div>
              </div>
              <p>
                Over Mili's time at Ember he managed and built a big chunk of
                our website. I worked closely with him on numerous website
                related projects during that time and was always impressed by
                his ability to solve any problem thrown at him. He then moved to
                the Product team and did some great work in one of our biggest
                feature releases to date. He's also a great team player, has a
                very positive attitude and is always keen to improve and find
                ways to make his work more efficient. Mili will be an asset to
                any team and will make an impact on anyone he works with!
              </p>
            </Card>
            <Card>
              <div className="flex gap-4">
                <Image
                  className="h-12 w-12 rounded-full"
                  src="/images/colleagues/Ben.webp"
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                    Ben Taylor
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Software Engineer
                  </p>
                </div>
              </div>
              <p>
                I've had the pleasure of working with Mili, and I'm genuinely
                impressed by his skills and personality. Mili is not just highly
                skilled in his field but also very easy to get along with. He's
                a sociable and likable individual who excels both professionally
                and personally. His technical expertise is top-notch, and he has
                a way of making even challenging tasks seem manageable. Mili has
                a knack for creating a positive and enjoyable atmosphere
                wherever he goes, making him a valuable addition to any team or
                organization. Don't miss out on the chance to have him on your
                team!
              </p>
            </Card>
          </div>
          <div className="space-y-6">
            <Card>
              <div className="flex gap-4">
                <Image
                  className="h-12 w-12 rounded-full"
                  src="/images/colleagues/Malinna.webp"
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                    Malinna Leach
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Tech Lead
                  </p>
                </div>
              </div>
              <p>
                Mili is a great team member. He has loads of enthusiasm and a
                passion for bringing designs to life on the Frontend. He
                communicates well to ensure he understands requirements. He is
                skilled in UI development, particularly using Tailwind, and is
                keen to deepen his understanding across a broad range of
                frontend technologies.
              </p>
            </Card>
            <Card>
              <div className="flex gap-4">
                <Image
                  className="h-12 w-12 rounded-full"
                  src="/images/colleagues/Yasheena.webp"
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                    Yasheena Victoria Louis
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Senior Markerter
                  </p>
                </div>
              </div>
              <p>
                Milinda worked under me on various projects, he consistently
                demonstrated good interpersonal skills throughout. He was very
                popular amongst all staff members as he quickly resolved all
                IT-related queries. His strong commitment and dedication to each
                task in hand would in my view be a great asset to any
                prospective employer.
              </p>
            </Card>
          </div>
          <div className="space-y-6 sm:hidden lg:block">
            <Card>
              <div className="flex gap-4">
                <Image
                  className="h-12 w-12 rounded-full"
                  src="/images/colleagues/Matt.webp"
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                    Matthieu W. Lefort-Le Corvec
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Head of Growth
                  </p>
                </div>
              </div>
              <p>
                Milinda (or Mili as everyone knows him) is a pleasure to work
                with. He's a dedicated and curious developper, always keen to
                learn more and improve his craft. Over his time at Ember, he
                went from looking after our website to working on our core
                application and delivering key projects at Ember. Moreover,
                Mili's a fantastic team player. He brings a lot of joy, humour
                and positive energy day-in, day-out, and everyone working
                closely with him here has come to see him as a friend. I cannot
                recommend him enough as a strong addition to any team.
              </p>
            </Card>
            {/* <Card>
              <div className="flex gap-4">
                <Image
                  className="h-12 w-12 rounded-full"
                  src="/images/avatars/avatar-4.webp"
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                    Daniella Doe
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    @hundler
                  </p>
                </div>
              </div>
              <p>
                Illum aliquid quo deleniti aperiam ab veniam sint non cumque
                quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </Card>
            <Card>
              <div className="flex gap-4">
                <Image
                  className="h-12 w-12 rounded-full"
                  src="/images/avatars/avatar.webp"
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                    Daniella Doe
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    @hundler
                  </p>
                </div>
              </div>
              <p>
                Illum aliquid quo deleniti aperiam ab veniam Sint libero
                voluptas veniam at reprehenderit, veritatis harum et rerum.
              </p>
            </Card> */}
          </div>
        </div>
      </Container>
    </div>
  );
}
