import TitleSection from "@/components/landing-page/title-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Banner from "../../../public/appBanner.png";
import Cal from "../../../public/cal.png";
import Diamond from "../../../public/icons/diamond.svg";
import CheckIcon from "../../../public/icons/check.svg";
import { CLIENTS, PRICING_CARDS, PRICING_PLANS, USERS } from "@/lib/constants";
import { randomUUID } from "crypto";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import CustomCard from "@/components/landing-page/custom-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

const HomePage = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  console.log("user :: ", data);
  return (
    <>
      <section>
        <div
          className=" mt-10
      gap-4
      overflow-hidden
      px-4
      sm:flex
      sm:flex-col
      sm:px-6
      md:items-center
      md:justify-center"
        >
          <TitleSection
            pill="✨ Your workspace, In motion."
            title="All-In-One Collaboration & Productivity Platform"
          />
          <div
            className="mt-6
          rounded-xl
          bg-white
          bg-gradient-to-r
          from-primary
          to-brand-primary-blue
          p-[2px]
          sm:w-[300px]
        "
          >
            <Button
              variant="btn-secondary"
              className=" w-full
            rounded-[10px]
            bg-background
            p-6
            text-2xl
          "
            >
              Get Motion Free
            </Button>
          </div>
          <div
            className="relative
          ml-[-50px]
          mt-[-40px]
          flex
          w-[750px]
          items-center
          justify-center
          sm:ml-0
          sm:w-full
          md:mt-[-90px]
        "
          >
            <Image src={Banner} alt="Application Banner" />
            <div
              className="absolute
            inset-x-0
            bottom-0
            top-1/2
            z-10
            bg-gradient-to-t
            dark:from-background
          "
            ></div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div
          // after:content['']
          // before:content['']
          className="
          flex
          overflow-hidden
          before:absolute
          before:inset-y-0
          before:left-0
          before:z-10
          before:w-20
          before:bg-gradient-to-r
          before:from-background
          before:to-transparent
          after:absolute

          after:inset-y-0
          after:right-0
          after:z-10
          after:w-20
          after:bg-gradient-to-l
          after:from-background
          after:to-transparent
          before:dark:from-brand-dark
          after:dark:from-brand-dark
        "
        >
          {[...Array(2)].map((arr) => (
            <div
              key={arr}
              className="animate-slide
                flex
                flex-nowrap
          "
            >
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className=" relative
                    m-20
                    flex
                    w-[200px]
                    shrink-0
                    items-center
                  "
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={150}
                    className="max-w-none object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section
        className="relative
        flex
        flex-col
        items-center
        justify-center
        px-4
        sm:px-6
      "
      >
        <div
          className="absolute
          top-24
          -z-10
          h-32
          w-[30%]
          rounded-full
          bg-brand-primary-purple/50
          blur-[120px]
        "
        />
        <TitleSection
          title="Keep track of your meetings all in one place"
          subheading="Capture your ideas, thoughts, and meeting notes in a structured and organized manner."
          pill="Features"
        />
        <div
          className="relative
          mt-10
          flex
          max-w-[450px]
          items-center
          justify-center
          rounded-2xl
          border-8
          border-washed-purple-300/10
          sm:ml-0
        "
        >
          <Image src={Cal} alt="Banner" className="rounded-2xl" />
          <div
            className="absolute
            inset-x-0
            bottom-0
            top-1/2
            z-10
            rounded-b-xl
            bg-gradient-to-t
            dark:from-background
            "
          ></div>
        </div>
      </section>
      <section className="relative scroll-mt-20" id="testimonial">
        <div
          className="absolute
          top-56
          -z-50
          h-32
          w-full
          rounded-full
          bg-brand-primary-purple/50
          blur-[120px]
        "
        />
        <div
          className="mt-20
          flex
          flex-col 
          overflow-visible
          overflow-x-hidden
          px-4
          sm:px-6
        "
        >
          <TitleSection
            title="Trusted by all"
            subheading="Join thousands of satisfied users who rely on our platform for their 
            personal and professional productivity needs."
            pill="Testimonials"
          />
          {[...Array(2)].map((arr, index) => (
            <div
              key={randomUUID()}
              className={twMerge(
                clsx("mt-10 flex flex-nowrap gap-6 self-start", {
                  "flex-row-reverse": index === 1,
                  "animate-[slide_250s_linear_infinite]": true,
                  "animate-[slide_250s_linear_infinite_reverse]": index === 1,
                  "ml-[100vw]": index === 1,
                }),
                "hover:paused"
              )}
            >
              {USERS.map((testimonial, index) => (
                <CustomCard
                  key={testimonial.name}
                  className="w-[500px]
                  shrink-0
                  rounded-xl
                  dark:bg-gradient-to-t
                  dark:from-border dark:to-background
                "
                  cardHeader={
                    <div
                      className="flex
                      items-center
                      gap-4
                  "
                    >
                      <Avatar>
                        <AvatarImage src={`/avatars/${index + 1}.png`} />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="dark:text-washed-purple-800">
                          {testimonial.name.toLocaleLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-washed-purple-800">
                      {testimonial.message}
                    </p>
                  }
                ></CustomCard>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section
        className="mt-20
        scroll-mt-20
        px-4
        sm:px-6
      "
        id="pricing"
      >
        <TitleSection
          title="The Perfect Plan For You"
          subheading="Experience all the benefits of our platform. Select a plan that suits your needs and take your productivity to new heights."
          pill="Pricing"
        />
        <div
          className="mt-10 
        flex
        flex-col-reverse
        items-center
        justify-center
        gap-4
        sm:flex-row
        sm:items-stretch
        "
        >
          {PRICING_CARDS.map((card) => (
            <CustomCard
              key={card.planType}
              className={clsx(
                "relative w-[300px] rounded-2xl backdrop-blur-3xl dark:bg-black/40",
                {
                  "border-brand-primaryPurple/70":
                    card.planType === PRICING_PLANS.proplan,
                }
              )}
              cardHeader={
                <CardTitle
                  className="text-2xl
                  font-semibold
              "
                >
                  {card.planType === PRICING_PLANS.proplan && (
                    <>
                      <div
                        className="absolute top-0 -z-10 hidden h-32 w-full
                        rounded-full
                        bg-brand-primary-purple/80
                        blur-[120px]
                        dark:block
                      "
                      />
                      <Image
                        src={Diamond}
                        alt="Pro Plan Icon"
                        className="absolute right-6 top-6"
                      />
                    </>
                  )}
                  {card.planType}
                </CardTitle>
              }
              cardContent={
                <CardContent className="p-0">
                  <span
                    className="text-2xl 
                    font-normal
                "
                  >
                    ${card.price}
                  </span>
                  {+card.price > 0 ? (
                    <span className="ml-1 dark:text-washed-purple-800">
                      /mo
                    </span>
                  ) : (
                    ""
                  )}
                  <p className="dark:text-washed-purple-800">
                    {card.description}
                  </p>
                  <Button
                    variant="default"
                    className="mt-4 w-full whitespace-nowrap"
                  >
                    {card.planType === PRICING_PLANS.proplan
                      ? "Go Pro"
                      : "Get Started"}
                  </Button>
                </CardContent>
              }
              cardFooter={
                <ul
                  className="mb-2
                  flex
                  flex-col
                  gap-4
                  font-normal
                "
                >
                  <small>{card.highlightFeature}</small>
                  {card.freatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex
                      items-center
                      gap-2
                    "
                    >
                      <Image src={CheckIcon} alt="Check Icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
