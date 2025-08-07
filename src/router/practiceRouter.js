import TestVue from '@/components/practice/0.TestVue.vue';
import Modeling from '@/components/practice/1.ModelingComponent.vue';
import ConditionalComponent from '@/components/practice/2.ConditionalComponent.vue';

export const practiceRouter = [
  {
    path: "/practice/test",
      name: "TestVue",
      component: TestVue
    },
    {
      path: "/practice/Modeling",
      name: "Modeling",
      component: Modeling
    },
    {
      path: "/practice/conditional",
      name: "ConditionalComponent",
      component: ConditionalComponent
    }
]