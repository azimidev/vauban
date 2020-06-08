import { Vue } from "vue-property-decorator";
import { Component } from "vue-property-decorator";

@Component
export default class Chunk extends Vue {
  protected chunk(array: Array<any>, chunk = 3): Array<any> {
    const temporary = [];
    let i, j;
    for (i = 0, j = array.length; i < j; i += chunk) {
      temporary.push(array.slice(i, i + chunk));
    }
    return temporary;
  }
}
