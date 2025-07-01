# Contributor Ladder

Hello! We are excited that you want to learn more about our project contributor ladder! This contributor ladder outlines the different contributor roles within the project, along with the responsibilities and privileges that come with them. Community members generally start at the first levels of the "ladder" and advance up it as their involvement in the project grows. Our project members are happy to help you advance along the contributor ladder.

Each of the roles is organized into lists of three types of things. "Responsibilities" are things that a contributor is expected to do. "Requirements" are qualifications a person needs to meet to be in that role, and "Privileges" are things contributors on that level are entitled to.

## Community Participant

A Community Participant engages with the project and its community, contributing their time, thoughts, etc. Community participants are usually users who have stopped being anonymous and started being active in project discussions.

- Responsibilities:
  - Must follow the [CNCF CoC](https://github.com/cncf/foundation/blob/main/code-of-conduct.md)
- How users can get involved with the community:
  - Participating in community discussions
  - Submitting bug reports
  - Commenting on issues
  - Trying out new releases
  - Attending community events
  - Reviewing pull requests

## Contributor

A Contributor is anyone who simply adds to the project, without any formal membership. Contributions need not be code. People at the _contributor_ level may be new contributors, or they may only contribute occasionally.

- Requirements:

  - Follow the [CNCF CoC](https://github.com/cncf/foundation/blob/main/code-of-conduct.md)
  - Follow the project contributing guide

- Responsibilities and privileges

  - Understand the nature of the change they are proposing or issue they are opening
  - Respond to questions and feedback from organization members

## Organization Member

An Organization Member is an established contributor who regularly participates in the project. Organization Members have privileges in both project repositories and elections, and as such are expected to act in the interests of the whole project.

An Organization Member must meet the responsibilities and has the requirements of a Contributor, plus:

- Requirements
  
  - Contributes regularly
  - Upholds community and CNCF values, [CoC](https://github.com/cncf/foundation/blob/main/code-of-conduct.md)
  - Enabled [two-factor authentication](https://help.github.com/articles/about-two-factor-authentication) on their GitHub account

- Responsibilities and privileges

  - Understand the nature of the change they are proposing or issue they are opening
  - Respond to questions and feedback from organization members
  - Read the [contributor guide](https://github.com/open-feature/.github/blob/main/CONTRIBUTING.md)
  - Participate in communication with the community, for instance using the [Slack channel](https://cloud-native.slack.com/archives/C0344AANLA1)
  - Represent the OpenFeature project at events and meetings

The process for a Contributor to become an Organization Member is as follows:

1. Sponsored by 2 [Approver](#approver). Note the following requirements for sponsors:
    - Sponsors must have close interactions with the prospective member - e.g. code/design/proposal review, coordinating on issues, etc.
    - Sponsors must be in an approvers or maintainers team for at least one resource in the[Community Configuration](https://github.com/open-feature/community/config/).
      - Sponsors must be from multiple member companies to demonstrate integration across community.
2. [Open an issue](https://github.com/open-feature/community/issues/new)

     - Ensure your sponsors are `@mentioned` on the issue
     - Complete every item on the checklist ([preview the current version of the
       template](https://github.com/open-feature/community/issues/new?labels=membership&template=membership.md))
     - Make sure that the list of contributions included is representative of your
       work on the project.

3. Have your sponsoring reviewers reply confirmation of sponsorship: `I support`
4. Once your sponsors have responded, your request will be reviewed by the
    Technical Committee (TC). Any TC member can review the requirements and add
    Members to the GitHub org.

## Triager

Triagers assist the maintainers and approvers with project management and
backlog organization. The specific workflows and triage requirements depend on
the project, and are set by the project maintainers.

Defined by: [Triage permissions](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#repository-access-for-each-permission-level),
with the names of the current Triagers committed to git, either in CONTRIBUTING,
CODEOWNERS, or the bottom of the README.

Triagers may be code contributors, but writing code is not a requirement for
becoming a triager. Triagers are encouraged to be active participants in project
meetings, chat rooms, and other discussion forums.

- Requirements

  - Nominated by a maintainer, with no objections from other maintainers.
  - Consistently contribute in meetings or in issues, PRs or discussions.

- Responsibilities and privileges

  - Have a limited understanding of the project goals as outlined by maintainers and the TSC
  - Respond to issues by asking clarifying questions and suggesting labels.
  - Respond to pull requests by reviewing code, testing manually, and providing (non-binding) approval or requesting changes

The process of becoming a Triager is:

1. The contributor is nominated by opening a PR against the appropriate repository, which adds their GitHub username to the respective GitHub team for one or more directories.
1. At least two members of the team that owns that repository or main directory, who are already Approvers, approve the PR.

## Approver

Code approvers are able to both review and approve code contributions, as well
as help maintainers triage issues and do project management.

While code review is focused on code quality and correctness, approval is
focused on holistic acceptance of a contribution including: backwards/forwards
compatibility, adhering to API and flag conventions, subtle performance and
correctness issues, interactions with other parts of the system, etc.

- Defined by:

  - [CODEOWNERS workflow](https://help.github.com/en/articles/about-code-owners)
  - [Community Configuration](https://github.com/open-feature/community/tree/main/config/open-feature)

Approver status can be scoped to a part of the codebase. For example, critical
core components may have higher bar for becoming an approver. Approver status may be a precondition to accepting large code contributions.

- Requirements

  - Reviewer of the codebase for at least 1 month
  - Reviewer or author of PRs to the codebase,
    with the definition of substantial subject to the maintainer's discretion
    (e.g. refactors/adds new functionality rather than one-line pulls).
  - Nominated by a maintainer
  - With no objections from other maintainers
  - Done through PR to update the [Community Configuration](https://github.com/open-feature/community/tree/main/config/open-feature).

- Responsibilities and privileges

  - Have a robust understanding of the project goals as outlined by maintainers and the TSC
  - Respond to issues by asking clarifying questions and suggesting labels
  - Respond to pull requests by reviewing code, testing manually, and providing approval or requesting changes
  - Expected to be responsive to review requests (inactivity for more than 1 month may result in suspension until active again)
  - Mentor contributors and reviewers

## Maintainer

Maintainers are the technical authority for a sub-project in the OpenFeature
project. They _MUST_ have demonstrated both good judgement and responsibility
towards the health of that sub-project. Maintainers _MUST_ set technical
direction and make or approve design decisions for their sub-project - either
directly or through delegation of these responsibilities.

- Defined by:

  - [Community Configuration](https://github.com/open-feature/community/config/)
  - [CODEOWNERS workflow](https://help.github.com/en/articles/about-code-owners)

- Requirements

  - Reviewer of the codebase for at least 3 months
  - Author and reviewer of PRs to the codebase,
    with the definition of substantial subject to the maintainer's discretion
    (e.g. refactors/adds new functionality rather than one-line pulls).
  - Nominated by a maintainer
  - With no objections from other maintainers
  - Done through PR to update the [Community Configuration](https://github.com/open-feature/community/tree/main/config/open-feature).

- Responsibilities and privileges

  - Have a deep understanding of the project goals as outlined by maintainers and the TSC
  - Respond to issues by asking clarifying questions, adding labels, and assigning contributors
  - Respond to pull requests by reviewing code, testing manually, and providing approval or requesting changes
  - Expected to be responsive to review requests (inactivity for more than 1 month may result in suspension until active again)
  - Mentor contributors and reviewers
  - Build and maintain automation to ensure code quality, security, compatibility, and availability 
  - Resolve vulnerabilities, dependency updates and broken automation
  - Set technical direction and priorities for the sub-project in coordination with the TSC and other maintainers
  - Auditing the maintenance of sub-components (ie: deprecating an unmaintained provider in a contrib repository)

### Becoming a Maintainer

Unless stated otherwise by the Technical Committee,
a new maintainer is elected by vote of the existing maintainers of the sub-project.
The vote is officially started when a pull request to add a new maintainer
is opened, and ends when the pull request is merged. The pull request may be
merged when the following conditions are met:

- The person being nominated has accepted the nomination by approving the pull request
- All maintainers have approved the pull request OR a majority of maintainers
  have approved the pull request and no maintainer has objected by requesting
  changes on the pull request. In the case that all maintainers have not given
  approval, the pull request should stay open for a minimum of 5 days before merging.

The nominee is considered a maintainer after the pull request is merged.

### Self-nomination is encouraged

If you feel like you meet the requirements above and are willing to take on the
additional responsibilities and privileges of being a maintainer, it is
recommended that you approach an existing maintainer about sponsoring your bid
to become a maintainer. After you and your sponsor have discussed the role
and its additional requirements and responsibilities, they may approach the other
maintainers about a vote to confirm you as a new maintainer. If the maintainer
does not believe you are ready for the role, or the sub-project is not in need
of additional maintainers, they may suggest an alternate role or growth areas
in order to improve your chances to become a maintainer in the future.

Process of becoming a maintainer:

1. Any current Maintainer may nominate a current Reviewer to become a new Maintainer, by opening a PR against the respective repository (Spec, java-sdk, community..) adding the nominee as an Approver in the respective maintainer group.
1. The nominee will add a comment to the PR testifying that they agree to all requirements of becoming a Maintainer.
1. A majority of the current Maintainers must then approve the PR.

## Inactivity

It is important for contributors to be and stay active to set an example and show commitment to the project. Inactivity is harmful to the project as it may lead to unexpected delays, contributor attrition, and a lost of trust in the project.

- Inactivity is measured by:
  - Periods of no contributions for longer than 3 months
  - Periods of no communication for longer than 3 months
- Consequences of being inactive include:
  - Involuntary removal or demotion
  - Being asked to move to Emeritus status

## Involuntary Removal or Demotion

Involuntary removal/demotion of a contributor happens when responsibilities and requirements aren't being met. This may include repeated patterns of inactivity, extended period of inactivity, a period of failing to meet the requirements of your role, and/or a violation of the Code of Conduct. This process is important because it protects the community and its deliverables while also opens up opportunities for new contributors to step in.

Involuntary removal or demotion is handled through a vote by a majority of the current Maintainers.

## Stepping Down/Emeritus Process

If and when contributors' commitment levels change, contributors can consider stepping down (moving down the contributor ladder) vs moving to emeritus status (completely stepping away from the project).

Contact the Maintainers about changing to Emeritus status, or reducing your contributor level.
When a contributor returns to being more active, they may be promoted back to their previous position at the discretion of the current maintainers by opening a PR. If the current maintainers do not agree on restoring the previous responsibilities they should follow the contributor ladder steps.

## Contact

- For inquiries, please reach out to:
  - members of the Governance Board
