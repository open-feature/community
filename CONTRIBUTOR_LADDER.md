---
title: Contributor Ladder
sidebar_position: 10
---
# OpenFeature Contributor Ladder


* [Contributor Ladder](#contributor-ladder)
    * [Community Participant](#community-participant)
    * [Contributor](#contributor)
    * [Organization Member](#organization-member)
    * [Triager](#triager)
    * [Approver](#approver)
    * [Maintainer](#maintainer)
* [Inactivity](#inactivity)
* [Involuntary Removal](#involuntary-removal-or-demotion)
* [Stepping Down/Emeritus Process](#stepping-downemeritus-process)
* [Contact](#contact)


## Contributor Ladder

Hello! We are excited that you want to learn more about our project contributor ladder! This contributor ladder outlines the different contributor roles within the project, along with the responsibilities and privileges that come with them. Community members generally start at the first levels of the "ladder" and advance up it as their involvement in the project grows. Our project members are happy to help you advance along the contributor ladder.

Each of the roles is organized into lists of three types of things. "Responsibilities" are things that a contributor is expected to do. "Requirements" are qualifications a person needs to meet to be in that role, and "Privileges" are things contributors on that level are entitled to.


### Community Participant

A Community Participant engages with the project and its community, contributing their time, thoughts, etc. Community participants are usually users who have stopped being anonymous and started being active in project discussions.

* Responsibilities:
    * Must follow the [CNCF CoC](https://github.com/cncf/foundation/blob/main/code-of-conduct.md)
* How users can get involved with the community:
    * Participating in community discussions
    * Submitting bug reports
    * Commenting on issues
    * Trying out new releases
    * Attending community events
    * Reviewing pull requests


### Contributor

A Contributor contributes directly to the project and adds value to it. Contributions need not be code. People at the Contributor level may be new contributors, or they may only contribute occasionally.

* Responsibilities include:
    * Follow the [CNCF CoC](https://github.com/cncf/foundation/blob/main/code-of-conduct.md)
    * Follow the project contributing guide
* Requirements (one or several of the below):
    * Report and sometimes resolve issues
    * Occasionally submit PRs
    * Contribute to the documentation
    * Show up at meetings, takes notes
    * Answer questions from other community members
    * Submit feedback on issues and PRs
    * Test releases and patches and submit reviews
    * Run or helps run events
    * Promote the project in public
    * Help run the project infrastructure
* Privileges:
    * Invitations to contributor events
    * Eligible to become an Organization Member


### Organization Member

An Organization Member is an established contributor who regularly participates in the project. Organization Members have privileges in both project repositories and elections, and as such are expected to act in the interests of the whole project.

An Organization Member must meet the responsibilities and has the requirements of a Contributor, plus:

* Responsibilities include:
   * Continues to contribute regularly
   * Help uphold our commmunity values and welcome newcomers
* Requirements:
   * Enabled [two-factor
     authentication](https://help.github.com/articles/about-two-factor-authentication)
     on their GitHub account
   * Have made multiple contributions to the project or community. Contributions
     may include, but is not limited to:
      * Authoring or reviewing PRs on GitHub
      * Filing or commenting on issues on GitHub
      * Contributing to subprojects, or community discussions (e.g. meetings,
        chat, email, and discussion forums)
      * [Joined the Slack channel](https://cloud-native.slack.com/archives/C0344AANLA1)
         * [Get an invite to join CNCF](http://slack.cncf.io/)
      * Have read the [contributor
        guide](https://github.com/open-feature/.github/blob/main/CONTRIBUTING.md)
      * Actively contributing to 1 or more subprojects.
* Privileges:
    * May be assigned Issues and Reviews
    * May give commands to CI/CD automation
    * Can recommend other contributors to become Org Members
    
The process for a Contributor to become an Organization Member is as follows:

 1. Sponsored by 2 [Approver](#approver). Note the following requirements for sponsors:
         * Sponsors must have close interactions with the prospective member - e.g.
           code/design/proposal review, coordinating on issues, etc.
         * Sponsors must be approvers or maintainers in at least 1 CODEOWNERS file
           in any repo in the OpenFeature org.
         * Sponsors must be from multiple member companies to demonstrate integration
           across community.
 2. [Open an issue](https://github.com/open-feature/community/issues/new)
   * Ensure your sponsors are `@mentioned` on the issue
   * Complete every item on the checklist ([preview the current version of the
        template](https://github.com/open-feature/community/ISSUE_TEMPLATE/membership.md))
   * Make sure that the list of contributions included is representative of your
        work on the project.
 3. Have your sponsoring reviewers reply confirmation of sponsorship: `I support`
 4. Once your sponsors have responded, your request will be reviewed by the
   Technical Committee (TC).  Any TC member can review the requirements and add
   Members to the GitHub org.


### Triager
Triagers assist the maintainers and approvers with project management and
backlog organization. The specific workflows and triage requirements depend on
the project, and are set by the project maintainers.

Defined by: [Triage permissions](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#repository-access-for-each-permission-level),
with the names of the current Triagers commited to git, either in CONTRIBUTING,
CODEOWNERS, or the bottom of the README.

Triagers may be code contributors, but writing code is not a requirement for
becoming a triager. Triagers are encouraged to be active participants in project
meetings, chat rooms, and other discussion forums.

* Requirements

- Nominated by a maintainer, with no objections from other maintainers.
- Consistently attend meetings and interact with issues.

* Responsibilities and privileges

- Have an understanding of the goals and workflows defined by the maintainers.
- Respond to new PRs and Issues by asking clarifying questions.
- Organize the backlog by applying labels, milestones, assignees, and projects.


The process of becoming a Trager is:

   1. The contributor is nominated by opening a PR against the appropriate repository, which adds their GitHub username to the respective GitHub team for one or more directories.
   2. At least two members of the team that owns that repository or main directory, who are already Approvers, approve the PR.

## Approver

Code approvers are able to both review and approve code contributions, as well
as help maintainers triage issues and do project management.

While code review is focused on code quality and correctness, approval is
focused on holistic acceptance of a contribution including: backwards/forwards
compatibility, adhering to API and flag conventions, subtle performance and
correctness issues, interactions with other parts of the system, etc.

Defined by: [CODEOWNERS
workflow](https://help.github.com/en/articles/about-code-owners).

Approver status can be scoped to a part of the codebase. For example, critical
core components may have higher bar for becoming an approver.

* Requirements

The following apply to the part of the codebase for which one would be an
approver in the `CODEOWNERS` files.

   * Reviewer of the codebase for at least 1 month
   * Reviewer for or author of PRs to the codebase,
     with the definition of substantial subject to the maintainer's discretion
     (e.g. refactors/adds new functionality rather than one-line pulls).
   * Nominated by a maintainer
   * With no objections from other maintainers
   * Done through PR to update the `CODEOWNERS`.

* Responsibilities and privileges

The following apply to the part of the codebase for which one would be an
approver in the `CODEOWNERS` files.

   * Approver status may be a precondition to accepting large code contributions
   * Demonstrate sound technical judgement (may be asked to step down by a maintainer if they lose confidence of the maintainers)
   * Responsible for project quality control via code reviews
      * Focus on holistic acceptance of contribution such as dependencies with other
        features, backwards / forwards compatibility, API and flag definitions, etc
   * Expected to be responsive to review requests (inactivity for more than 1 month may result in suspension until active again)
   * Mentor contributors and reviewers
   * May approve code contributions for acceptance

### Maintainer

Maintainers are the technical authority for a subproject in the OpenFeature
project. They *MUST* have demonstrated both good judgement and responsibility
towards the health of that subproject. Maintainers *MUST* set technical
direction and make or approve design decisions for their subproject - either
directly or through delegation of these responsibilities.

Defined by: GitHub organization ownership, permissions and entry in `CODEOWNERS`
files.

* Requirements

Unlike the roles outlined above, the maintainers of a subproject are typically
limited to a relatively small group of decision makers and updated as fits
the needs of the subproject.

The following apply to the subproject for which one would be a maintainer.
   * Deep understanding of the technical goals and direction of the subproject
   * Deep understanding of the technical domain (specifically the language) of the
     subproject
   * Sustained contributions to design and direction by doing all of:
      * Authoring and reviewing proposals
      * Initiating, contributing and resolving discussions (emails, GitHub issues,
        meetings)
      * Identifying subtle or complex issues in designs and implementation PRs
   * Directly contributed to the subproject through implementation and / or review
   * Aligning with the overall project goals, specifications and design principles
     defined by Technical Committee (TC). Bringing general questions and requests
     to the discussions as part of specifications project.

* Responsibilities and privileges

The following apply to the subproject for which one would be a maintainer.

   * Make and approve technical design decisions for the subproject.
   * Set technical direction and priorities for the subproject.
   * Define milestones and releases.
      * Decides on when PRs are merged to control the release scope.
   * Mentor and guide approvers, reviewers, and contributors to the subproject.
   * Escalate *reviewer* and *maintainer* workflow concerns (i.e. responsiveness,
     availability, and general contributor community health) to the TC.
   * Ensure continued health of subproject:
      * Adequate test coverage to confidently release
      * Tests are passing reliably (i.e. not flaky) and are fixed when they fail
   * Ensure a healthy process for discussion and decision making is in place.
   * Work with other maintainers to maintain the project's overall health and
     success holistically.

### Becoming a Maintainer

Unless stated otherwise by the Technical Committee,
a new maintainer is elected by vote of the existing maintainers of the Subproject.
The vote is officially started when a pull request to add a new maintainer
is opened, and ends when the pull request is merged. The pull request may be
merged when the following conditions are met:

* The person being nominated has accepted the nomination by approving the pull request
* All maintainers have approved the pull request OR a majority of maintainers
  have approved the pull request and no maintainer has objected by requesting
  changes on the pull request. In the case that all maintainers have not given
  approval, the pull request should stay open for a minimum of 5 days before merging.

The nominee is considered a maintainer after the pull request is merged.

#### Self-nomination is encouraged

If you feel like you meet the requirements above and are willing to take on the
additional responsibilities and privileges of being a maintainer, it is
recommended that you approach an existing maintainer about sponsoring your bid
to become a maintainer. After you and your sponsor have discussed the role
and its additional requirements and responsibilities, they may approach the other
maintainers about a vote to confirm you as a new maintainer. If the maintainer
does not believe you are ready for the role, or the subproject is not in need
of additional maintainers, they may suggest an alternate role or growth areas
in order to improve your chances to become a maintainer in the future.

Process of becoming a maintainer:

1. Any current Maintainer may nominate a current Reviewer to become a new Maintainer, by opening a PR against the respective repository (Spec, java-sdk, community..) adding the nominee as an Approver in the respective maintainer group.
2. The nominee will add a comment to the PR testifying that they agree to all requirements of becoming a Maintainer.
3. A majority of the current Maintainers must then approve the PR.


## Inactivity
It is important for contributors to be and stay active to set an example and show commitment to the project. Inactivity is harmful to the project as it may lead to unexpected delays, contributor attrition, and a lost of trust in the project.

* Inactivity is measured by:
    * Periods of no contributions for longer than 3 months
    * Periods of no communication for longer than 3 months
* Consequences of being inactive include:
    * Involuntary removal or demotion
    * Being asked to move to Emeritus status

## Involuntary Removal or Demotion

Involuntary removal/demotion of a contributor happens when responsibilities and requirements aren't being met. This may include repeated patterns of inactivity, extended period of inactivity, a period of failing to meet the requirements of your role, and/or a violation of the Code of Conduct. This process is important because it protects the community and its deliverables while also opens up opportunities for new contributors to step in.

Involuntary removal or demotion is handled through a vote by a majority of the current Maintainers.

## Stepping Down/Emeritus Process
If and when contributors' commitment levels change, contributors can consider stepping down (moving down the contributor ladder) vs moving to emeritus status (completely stepping away from the project).

Contact the Maintainers about changing to Emeritus status, or reducing your contributor level.

## Contact
* For inquiries, please reach out to:
    *  members of the Governance Board
