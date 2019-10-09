import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MyModalComponent } from "./my-modal.component";

describe("MyModalComponent", () => {
  let component: MyModalComponent;
  let fixture: ComponentFixture<MyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should change value on open modal", () => {
    component.openModal();
    expect(component.modalOpened).toBeTruthy();
    expect(document.getElementById("myModal").style.display).toBe("block");
  });
  it("should clear data on close modal", () => {
    component.closeModal();
    expect(document.getElementById("myModal").style.display).toBe("none");
    expect(component.clearData).toHaveBeenCalled();
    expect(component.categoryName).toBe("");
    expect(component.categoryDesc).toBe("");
  });
  it("should add Image to the particular list", () => {
    const categoryObj = {
      name: "gg",
      desc: "hh",
      images: [
        "https://cdn.pixabay.com/user/2019/10/06/10-20-21-390_250x250.jpg"
      ]
    };
    component.addImageToThisList(categoryObj);
    expect(component.edit).toHaveBeenCalledWith(categoryObj);
    expect(component.editedItem.images.length).not.toEqual(0);
    expect(component.update).toHaveBeenCalled();
    expect(component.closeModal).toHaveBeenCalled();
  });
});
