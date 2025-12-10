import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'dad'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '54a'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '6c5'),
            routes: [
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', '2a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-the-robotic-nervous-system/intro',
                component: ComponentCreator('/docs/module-1-the-robotic-nervous-system/intro', '110'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-the-robotic-nervous-system/lesson-1-introduction-to-ros2',
                component: ComponentCreator('/docs/module-1-the-robotic-nervous-system/lesson-1-introduction-to-ros2', '2a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-the-robotic-nervous-system/lesson-2-nodes-topics-services',
                component: ComponentCreator('/docs/module-1-the-robotic-nervous-system/lesson-2-nodes-topics-services', '3ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-the-robotic-nervous-system/lesson-3-bridging-python-agents',
                component: ComponentCreator('/docs/module-1-the-robotic-nervous-system/lesson-3-bridging-python-agents', 'd1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-the-robotic-nervous-system/lesson-4-understanding-urdf',
                component: ComponentCreator('/docs/module-1-the-robotic-nervous-system/lesson-4-understanding-urdf', '645'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-the-digital-twin/intro',
                component: ComponentCreator('/docs/module-2-the-digital-twin/intro', 'f4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-the-digital-twin/lesson-1-introduction-to-gazebo',
                component: ComponentCreator('/docs/module-2-the-digital-twin/lesson-1-introduction-to-gazebo', 'fba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-the-digital-twin/lesson-2-physics-simulation',
                component: ComponentCreator('/docs/module-2-the-digital-twin/lesson-2-physics-simulation', 'd8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-the-digital-twin/lesson-3-high-fidelity-rendering',
                component: ComponentCreator('/docs/module-2-the-digital-twin/lesson-3-high-fidelity-rendering', '452'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-the-digital-twin/lesson-4-sensor-simulation',
                component: ComponentCreator('/docs/module-2-the-digital-twin/lesson-4-sensor-simulation', 'aa1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-the-ai-robot-brain/intro',
                component: ComponentCreator('/docs/module-3-the-ai-robot-brain/intro', '9d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-the-ai-robot-brain/lesson-1-introduction-to-nvidia-isaac',
                component: ComponentCreator('/docs/module-3-the-ai-robot-brain/lesson-1-introduction-to-nvidia-isaac', '42f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-the-ai-robot-brain/lesson-2-photorealistic-simulation',
                component: ComponentCreator('/docs/module-3-the-ai-robot-brain/lesson-2-photorealistic-simulation', 'd2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-the-ai-robot-brain/lesson-3-hardware-accelerated-vslam',
                component: ComponentCreator('/docs/module-3-the-ai-robot-brain/lesson-3-hardware-accelerated-vslam', '8ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-the-ai-robot-brain/lesson-4-path-planning-for-bipedal-movement',
                component: ComponentCreator('/docs/module-3-the-ai-robot-brain/lesson-4-path-planning-for-bipedal-movement', '33d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vision-language-action/capstone_implementation',
                component: ComponentCreator('/docs/module-4-vision-language-action/capstone_implementation', 'ea6'),
                exact: true
              },
              {
                path: '/docs/module-4-vision-language-action/intro',
                component: ComponentCreator('/docs/module-4-vision-language-action/intro', '216'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vision-language-action/lesson-1-introduction-to-vla',
                component: ComponentCreator('/docs/module-4-vision-language-action/lesson-1-introduction-to-vla', 'a1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vision-language-action/lesson-2-voice-to-action-whisper',
                component: ComponentCreator('/docs/module-4-vision-language-action/lesson-2-voice-to-action-whisper', 'a9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vision-language-action/lesson-3-cognitive-planning-llms',
                component: ComponentCreator('/docs/module-4-vision-language-action/lesson-3-cognitive-planning-llms', '50a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vision-language-action/lesson-4-capstone-project',
                component: ComponentCreator('/docs/module-4-vision-language-action/lesson-4-capstone-project', '425'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '70e'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '315'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'f86'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '9f6'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'b91'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', '272'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'a34'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '739'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
