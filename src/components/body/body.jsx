import React from "react";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

import hero from '../../assets/hero.jpg';
import Section from "../body-section/section";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import ScrollTopFab from '../floating-action-button/floating-action-button';

const Bold = styled.span`
	font-weight: 700;
`;
export default function body(props) {
	
	var classes = makeStyles((theme) => ({
		root: {
			display: 'flex',
			flexDirection: "row",
		},
		heroImage: {
			height: "auto",
			width: "100%",
			margin: 0,
			padding: 0,
			filter: "brightness(60%)",
			transition: "all ease-in-out .2s",
			overflow: "hidden",
			"&:hover": {
				filter: "brightness(100%)",
			}
		}
		
	}))();
	return (
		<React.Fragment>
			<Section row>
				<img className={classes.heroImage} src={hero} alt={"Scammers Are Out of Control Right Now"}/>
				<Box my={"auto"} mx={2}>
					<Typography variant="h2" align={"left"}>
						<Box m={3} fontSize={"2.2rem"} fontWeight={900}>
							A Non-Technical Introduction to Cybersecurity
						</Box>
					</Typography>
				</Box>
			</Section>
			<Section id={"why-do-we-need-cybersecurity"}>
				<Box fontSize={"2.2em"} fontWeight={700} mt={5} mx={5}>Why do we need cybersecurity?</Box>
				<Box fontSize={"1.5em"} m={5}>
					Computers have no moral compass. Stick ’em with a formally specified problem and they’ll happily
					twiddle some bits and shoot out an answer in lightning speed. They don’t think twice about why
					they’re carrying out these instructions, nor do they care about the implications of doing so. To a
					computer, running some code that takes down a hospital’s computer systems until a ransom is paid is
					no different than running code to operate bomb-defusing robots.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					In other words, for all the good they can be used for, computers can be used for just as much bad.
					Moreover, the same properties that make computers so useful make them dangerous.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					They’re cheap, so anyone can use them. Picture an army of petty thieves downloading and using
					scripts to try and pick the pockets of millions of people the world over.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					They’re powerful, so everyone uses them. Think about thousands of spies all over the world
					simultaneously prodding around the perimeter of the Pentagon’s cyber-defense systems without ever
					needing to leave their own homes and risk physical harm or capture.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					They’re fast, so imagine all of those attacks I just mentioned, along with thousands of others,
					being carried out hundreds of times each every single day.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					So, just like we have physical security in the form of door locks, fences and police officers to
					minimize crime in the real world, we need cybersecurity to minimize crime and harm in the virtual
					world.
				</Box>
			</Section>
			<Section id={"what-is-cybersecurity"}>
				<Box fontSize={"2.2em"} fontWeight={700} mt={5} mx={5}>What is cybersecurity?</Box>
				<Box fontSize={"1.5em"} m={5}>
					The scope of cybersecurity evolves as fast as the capabilities of computing. But, for our purposes
					today, we can think of it as a set of models, techniques and technologies to protect the secrecy,
					integrity and availability of computer systems and data against a known threat model.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					Let’s unpack that a bit: secrecy, integrity and availability are all the higher-level goals of
					cybersecurity.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					Secrecy, or confidentiality, means that only authorized people should be able to see or read
					specific computer systems and data. Personal data breaches where companies inadvertently reveal
					people’s credit card information, for example, would be secrecy violations.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					Integrity means that only authorized people should have the ability to use or modify those systems
					and data. Hackers who learn your e-mail password and and send e-mail as you would be an example of
					an integrity violation.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					Availability means that authorized people should always have access to those systems and data.
					Denial of Service attacks, where hackers overload a website with fake requests to make it slow or
					unreachable for others, is an example on an attack to availability.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					Of course, security is more than just secrecy, integrity and availability. But, when we think of the
					goals of cybersecurity, we often think of those three.
				</Box>
			</Section>
			<Section id={"threat-Models"}>
				<Box fontSize={"2.2em"} fontWeight={700} mt={5} mx={5}>Threat Models</Box>
				<Box fontSize={"1.5em"} m={5}>
					Okay, so what’s a threat model? Security starts with a specification of who your “enemy” is at an
					abstract level: i.e., with a threat model.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					Threat models formally profile attackers: their capabilities, goals, and probable attack vectors.
					Having this knowledge lets you start building towards a specific goal, rather than being overwhelmed
					by all of the possible ways “hackers” could get to your systems and data.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					For example, let’s say you want to “secure” physical access to your laptop. Your threat model is
					your lazy roommate. To preserve the secrecy, integrity and availability of your laptop against a
					lazy roommate, you probably just need to keep your computer up a couple of flights of stairs. But,
					if your threat model is a sprightly, mischievous younger sibling, then you’ll need to do a bit more:
					lock it in a safe, maybe.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					In other words, whether and how a system is secured depends heavily on who it is being secured
					against.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					Threat models in computer security are typically a bit more formally specified than “lazy roommate”,
					of course. There are many different kinds of threat models out there. Commonly, you’ll see threat
					models only specified in terms of technical capabilities: for example, “someone who has access to
					your physical laptop and has as much time as he or she wants”. Given this threat model, it is the
					job of security architects to come up with a solution that keeps a system secure against that threat
					model as long as certain assumptions are met (e.g., no one reveals their password to the attacker).
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					With a persistent rise in cybercrime, however, there is a growing, holistic interest in broaching
					beyond just the technical specification of threat models to look more deeply into the psychology of
					attackers to understand not only their capabilities, but their motivations, their risk tolerances
					and their incentives.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					Okay, now you know what cybersecurity is or tries to be. So let’s talk a little bit more about the
					security toolbox: i.e., technical approaches to protecting the secrecy, integrity and availability
					of computer systems, networks and data. We’re going to only cover the basics here.
				</Box>
			</Section>
			<Section id={"authentication"}>
				<Box fontSize={"2.2em"} fontWeight={700} mt={5} mx={5}>Authentication</Box>
				<Box fontSize={"1.5em"} m={5}>
					A lot of security boils down to two questions: who are you, and to what systems should you have
					access? Clearly, access should be afforded to the right people but refused to the wrong people. So
					how can we differentiate between the right and wrong people?
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					We use authentication.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					Authentication is the process by which a computer system comes to understand with whom it is
					interacting. Generally, there are three types of authentication:
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5} fontStyle={"italic"}>
					What you know, what you have, and what you are.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					What you know authentication is based on knowledge of a secret known only by the real user and the
					computer system. Usernames and passwords are one form of this. Other forms include graphical
					passwords, like Android’s 9-dot pattern lock or Microsoft’s picture password.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					What you have authentication is based on possession of a secret token that only the real user should
					have. For example, a physical key and lock are an example of what you haveauthentication: you can
					only unlock a locked door if you have the correct key. Keycards that allow you to access private
					rooms or buildings work in a similar manner.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					Finally, what you are authentication is based on your person. You authenticate by presenting
					yourself or something you do to digital sensors and have the computer recognize who you are and/or
					what you are doing. Biometric authenticators, like fingerprint readers or facial recognizers or
					voice recognizers are classic examples of what you are authentication.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					Each of these different types of authentication have their pros and cons.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					What you know authenticators are typically the easiest and cheapest as they require no special
					hardware. Simplicity and ease of use are probably the primary reason passwords are the most common
					form of authentication, today. But, this form of authentication can be compromised if hackers can
					guess or otherwise come to know your secret.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					When you think about guessing, you might thinking about easily guessable passwords like password1 or
					12345678 or iloveyou. But, remember, we’re not just talking about easy for a human to guess: we’re
					also talking about easy for a computer to guess. Consider the PIN: 8245. This seems pretty difficult
					to guess right off the bat — and it is, for a human. But there are only 10,000 possible combinations
					of 4-digit PINs. Computers can run through 10,000 instructions in sub-second speeds, so 8245 is very
					easy for a computer to guess. Even if an attacker is only given a handful of guesses for any single
					account, it is important to keep in mind that rarely are attackers targeting any one account:
					rather, they might be targeting millions of accounts through something like a botnet or a
					compromised offline database of account information. So, if an attacker is given three random
					guesses to crack a million 4-digit PINs, they are likely going to correctly guess quite a few
					people’s PINs.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					But, for every additional digit you add to a PIN, it gets harder and harder to guess and
					successfully carry out these sorts of brute force attacks: there are, for example, 100,000 possible
					combinations of 5-digit PINs, 1,000,000 possible 6-digit PINs, 10,000,000 possible 7-digit PINs and
					so on and so forth. More generally, the greater the length of a secret, the harder it will be for
					computers to crack.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					Your secret can also be compromised if hackers gain access to a computing system in which your
					secret is stored (e.g., if you use gmail and attackers compromise gmail servers, there’s a chance
					they’ll be able to access to your password). This is one of the reasons you have probably been told
					to avoid re-using passwords across multiple accounts.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					What you have authenticators escape the problem of being “guessable”. They typically require
					physical co-location, which makes it much harder for remote attackers to gain access without risking
					physical apprehension. For example, someone from Moscow is not going to be able to gain access to
					your front door in Florida without getting himself or a proxy to Florida. But, what you have
					authentication can still be compromised once an attacker is in physical proximity. Keys and keycards
					can be forged or stolen and locks can be picked.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					People may also routinely forget or lose their keycards, resulting in an expensive and slow process
					to de-activate one’s lost keycard and print out a new one. Finally, it is not easy to implement what
					you have authentication beyond physical space access. Imagine the steps required to use a special
					keycard to access your e-mail: you would need to get mailed (or 3D print, I suppose) a special
					keycard, buy a keycard reader, hook it up to your laptop and then remember to bring the whole
					apparatus with you if you ever want to access your e-mail from a different location.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					What you are authentication is typically what most laypeople think of as the most secure:
					fingerprint readers and facial recognizers still often seem like the stuff of spies and secret
					agents. And, they can, indeed, be very secure.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					But their security is only as strong as the sensors and software that are used and the good sensors
					and software can be very expensive. Furthermore, sensors are typically not absolute. What you know
					and what you have authentication have the very nice property of being deterministic: if you know the
					secret or have the key you are granted access 100% of the time. If you don’t, you will gain access
					0% of the time.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					Biometric authentication, however, is probabilistic. There is some chance that a system will not
					recognize you if you’re wearing a hat, or if the lighting is bad. Worse, there is some chance the
					system will recognize the wrong person as you. Of course, in production systems, these chances are
					reduced to being very low. But, they are not 0.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					Another potential issue with biometric authenticators is that they can’t be reset. You have only so
					many fingers: what happens if an attacker compromises your fingerprint data? You can’t change it,
					and it is considered by the general populace as being something that is hard to forge. So, an
					attacker who has the ability to forge it will be given privileged access to a lot of things to which
					only you should have access.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					Basically, all forms of authentication have their pros and cons and all can be compromised. This is
					one of the reasons why most security experts today suggest using two or more forms of authentication
					for very important accounts: this is known as two-factor or multi-factor authentication. It might be
					easy for an attacker to guess your password or steal your keycard: it’s much harder for any single
					attacker to do both.
				</Box>
			
			</Section>
			<Section id={"access-control"}>
				<Box fontSize={"2.2em"} fontWeight={700} mt={5} mx={5}>Access Control</Box>
				<Box fontSize={"1.5em"} m={5}>
					After authentication comes access control. Even if a system knows definitively who you are, how does
					it know what you should be able to access?
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					This is done through access control: or a specification of who should be able to see, modify and/or
					use what.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					The general rule for access control is that no one should be able to access more than exactly what
					they need to access at any given moment.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					This is one of the reasons that even personal-use computers typically have a special “administrator”
					or “root” account in addition to a regular account. The regular account should be used for
					day-to-day operations, while the administrator account should only be used to install special
					software or perform special functions on a fairly limited basis. This is to limit the amount damage
					an attacker can cause: compromising the typically visible regular-use account would not allow an
					attacker to, for example, delete all files on the hard-drive or install system wide malware.
					Compromising an administrator account would.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					Typically, there are different levels of access that correlate to secrecy, integrity and
					availability. “Read” permissions allow a user to see the contents of a file. “Write” permissions
					allow a user to modify the contents of that file. “Execute” permissions allow a user to run a
					program.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					“Access” can mean a user having any of subset of those permissions. An “access control list”, or
					ACL, describes which users should have read, write and/or execute access to which files and programs
					on a computing system. These can be implemented at the file level (i.e., each file has its own ACL)
					or at the system level (i.e., there is one ACL that stores each user’s access to each file).
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					For organizations who have employees or members that should have different levels of access to
					privileged data or systems (e.g., a large corporation or the military), it is especially important
					for ACLs to be configured correctly to ensure secrecy, integrity and availability.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5} fontStyle={"italic"}>
					Let’s say we have three levels of access: public, secret and top secret. </Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					The first general rule of thumb is that people should not be able to “read up”: i.e., if a member if
					only cleared to read secret files, they should not be able to read top secret files but should be
					able to access secret and public files.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					The second general rule of thumb is that people should not be able to “write down”: i.e., if a
					member has top secret clearance, then they should only be able to write or modify top secret files.
					This ensures that there is no accidental leakage of top secret information in secret or public
					files.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					These no “read up” or “write down” rules are part of a model of access control known as the
					Bell-LaPadula model which was developed for use in military and government applications. Of course,
					there are many models for appropriate access control configuration. The models that should be used
					depend heavily on the use case. <a target={"_blank"} rel="noopener noreferrer"
					                                   href={"https://en.wikipedia.org/wiki/Access_control"}>Wikipedia
					provides a cursory overview</a>.
				</Box>
			
			</Section>
			<Section id={"system-and-application_security"}>
				<Box fontSize={"2.2em"} fontWeight={700} mt={5} mx={5}>System and application security</Box>
				<Box fontSize={"1.5em"} m={5}>
					Finally, system and application security is a set of methods and recommendations to secure the key
					software and processes upon which all other programs depend.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					Authentication and access control help a computing system determine who you are and what you should
					access, but depend on being able to trust the hardware and software that run the authentication and
					access control programs. </Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					That’s a big dependence.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					If an attacker installs malware that compromises the host computer’s operating system, how can we be
					sure that the authentication and access control programs don’t have a backdoor that let attackers
					in?
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					The short answer is: we can’t.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					But this is why system and application security is so essential. Unfortunately, we still have no way
					to formally guarantee the security of a program or computing system because even while security
					software might be “secure” in theory, implementation error can result in security vulnerabilities.
					The best we have are techniques to: (i) reduce the likelihood of implementation error, (ii) quickly
					find and patch implementation errors when they are found, and (iii) mitigate the damage that can be
					done when an application or process is compromised.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					<Bold>Reducing code bloat:</Bold> Most security errors come from implementation error, or software
					bugs. To reduce implementation error, reduce implementation. Along these lines, one of the holy
					grails of system level security is “security kernel” or a “trusted computing base”: a small core of
					key operating system software that is close to provably secure. A challenge in constructing these
					security kernels is deciding what should go into it: remember, smaller is better. </Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					<Bold>Independent Verification and Validation (IVV):</Bold> Even after mitigating code bloat, we
					would still want a “guarantee” that the code that is written is secure. Formally verifying the
					security of code is an active area of research, but it is still far from perfect. The best we have
					is a process called independent verification and validation. This works by having code audited by a
					crowd of security-minded developers. This is the reason why security code is almost always
					open-sourced: it can be difficult for the people who originally wrote the code to spot
					implementation errors, but it is easier for external developers. This is also one of the reasons why
					industry standards for security are typically old: newer, flashier security code has had less time
					to be vetted by a broader community. Finally, this is also why an independent developer should never
					implement their own versions of security protocols and cryptographic techniques.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					<Bold>Isolation:</Bold> Finally, even after reducing and thoroughly auditing code, clever attackers
					are likely to find hacks that let them in. When programs are compromised, however, one of the key
					tenets of system and application level security is isolation. The isolation principle can be
					summarized as follows: if an attacker compromises one program, it should not make it easier for them
					to compromise any other program on the same computing system. To get isolation, we can “sandbox”
					applications so that they have their own blocks of memory that only they can access and no other
					application can touch. Virtual Machines (VMs) are one way to accomplish this at the system level
					instead of at the application level. With VMs, one can run different virtual operating systems on
					the same computing system so that an attacker who compromises any one VM cannot, in theory, get to
					any other VM.
				</Box>
				<Box fontSize={"1.5em"} mb={5} mx={5}>
					Anti-virus software is often an attempt to discover and combat threats to system and application
					level security. Unfortunately, clever attackers also often disguise malware as anti-virus software
					to trick unsuspecting lay users into installing their programs.
				</Box>
			
			
			</Section>
			<Section id={"conclusion"}>
				<Box fontSize={"2.2em"} fontWeight={700} mt={5} mx={5}>Conclusion</Box>
				<Box fontSize={"1.5em"} m={5}>
					That was a very broad overview of some core principles in cybersecurity. I hope you’ll forgive my
					not going into too much detail about any one type of attack or defense strategy. Of course, there
					are also many things that I did not even begin to cover — for example, network security,
					side-channel attacks or encryption. Alas, there is only so much time. Perhaps if there is more
					interest, I’ll expand on the topic in the near future.
					If an attacker installs malware that compromises the host computer’s operating system, how can we be
					sure that the authentication and access control programs don’t have a backdoor that let attackers
					in?
				</Box>
			
			</Section>
			{/*floating action button*/}
			<ScrollTopFab/>
		</React.Fragment>
	)
}