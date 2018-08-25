import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSubs',
  pure: false
})
export class FilterSubcategoriesPipe implements PipeTransform {
  transform(categories: any[], categoryId: number): any {
    let subs: any[] = []

    return categories
                .filter(c => c.id == categoryId)
                .map(c => c.subcategories)
  }
}
