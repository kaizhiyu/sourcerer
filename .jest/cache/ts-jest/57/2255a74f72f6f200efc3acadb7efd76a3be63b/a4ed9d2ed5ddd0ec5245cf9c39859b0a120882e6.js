"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var drawerlayout_1 = require("../drawerlayout");
var coordinatorlayout_1 = require("../coordinatorlayout");
var componentsmaterial_1 = require("../componentsmaterial");
var appcompat_1 = require("../appcompat");
var core_1 = require("../core");
var main_1 = require("../main");
describe('testing element', function () {
    test('single option is set', function () {
        var layout = drawerlayout_1.DrawerLayout({ colorPrimaryDark: 'white' }).build();
        var drawerLayout = layout.map.drawerLayout;
        expect(drawerLayout.attributes.colorPrimaryDark).toEqual('white');
    });
    test('single child is set', function () {
        var layout = drawerlayout_1.DrawerLayout({}, [coordinatorlayout_1.CoordinatorLayout({ id: 'test' })]).build();
        var drawerLayout = layout.map.drawerLayout;
        expect(drawerLayout).toHaveProperty("children");
        var children = drawerLayout.children;
        expect(children[0]).toEqual('drawerLayout_coordinatorLayout');
        var coordinatorLayout = layout.map.drawerLayout_coordinatorLayout;
        expect(coordinatorLayout.attributes.id).toEqual('test');
    });
    test('single child and option is set', function () {
        var layout = drawerlayout_1.DrawerLayout({ id: 'noot' }, [coordinatorlayout_1.CoordinatorLayout()]).build();
        var drawerLayout = layout.map.drawerLayout;
        expect(drawerLayout).toHaveProperty("children");
        var children = drawerLayout.children;
        expect(children[0]).toEqual('drawerLayout_coordinatorLayout');
        expect(drawerLayout.attributes.id).toEqual('noot');
    });
    test('drawer with navigation layout', function () {
        var layout = drawerlayout_1.DrawerLayout({ layout_width: "match_parent", layout_height: "match_parent" }, [
            coordinatorlayout_1.CoordinatorLayout({ background: "#FEFEFE" }, [
                componentsmaterial_1.AppBarLayout({ layout_height: "290dp" }, [
                    appcompat_1.AppcompatToolbar({ title: 'Navigation Playground' }),
                ]),
                core_1.NestedScrollView({}, [main_1.LinearLayout({ orientation: main_1.MainTypes.OrientationEnum.vertical })]),
            ]),
            componentsmaterial_1.NavigationView({
                layout_gravity: [
                    drawerlayout_1.DrawerlayoutTypes.LayoutGravityFlagsEnum.start,
                    drawerlayout_1.DrawerlayoutTypes.LayoutGravityFlagsEnum.left
                ]
            }),
        ]).build();
        var appBarLayout = layout.map.drawerLayout_coordinatorLayout_appBarLayout.attributes;
        expect(appBarLayout.attributes.layout_height).toEqual(true);
        expect(appBarLayout).toHaveProperty("children");
        var nestedScrollView = layout.map.drawerLayout_coordinatorLayout_nestedScrollView;
        var children = nestedScrollView.children;
        expect(children[0]).toEqual('drawerLayout_coordinatorLayout_nestedScrollView_linearLayout');
        var navigationView = layout.map.drawerLayout_navigationView;
        expect(navigationView.attributes.layout_gravity).toEqual(['start', 'left']);
    });
    test('converts to json array', function () {
        var layout = drawerlayout_1.DrawerLayout({ layout_width: "match_parent", layout_height: "match_parent" }, [
            coordinatorlayout_1.CoordinatorLayout({ background: "#FEFEFE" }, [
                componentsmaterial_1.AppBarLayout({ layout_height: "290dp" }, [
                    appcompat_1.AppcompatToolbar({ title: 'Navigation Playground' }),
                ]),
                core_1.NestedScrollView({}, [main_1.LinearLayout({ orientation: main_1.MainTypes.OrientationEnum.vertical })]),
            ]),
            componentsmaterial_1.NavigationView({
                layout_gravity: [
                    drawerlayout_1.DrawerlayoutTypes.LayoutGravityFlagsEnum.start,
                    drawerlayout_1.DrawerlayoutTypes.LayoutGravityFlagsEnum.left
                ]
            }),
        ]).build();
        console.log(layout.toJson());
        expect(layout.toJson()).toEqual(jsonOutput);
    });
});
// tslint:disable-next-line:max-line-length
var jsonOutput = '[{"id":"drawerLayout","type":"drawerLayout","attributes":{},"children":["drawerLayout_coordinatorLayout","drawerLayout_navigationView"]},{"id":"drawerLayout_coordinatorLayout","type":"coordinatorLayout","attributes":{},"children":["drawerLayout_coordinatorLayout_appBarLayout","drawerLayout_coordinatorLayout_nestedScrollView"]},{"id":"drawerLayout_coordinatorLayout_appBarLayout","type":"appBarLayout","attributes":{"fitsSystemWindow":true},"children":["drawerLayout_coordinatorLayout_appBarLayout_toolbar"]},{"id":"drawerLayout_coordinatorLayout_appBarLayout_toolbar","type":"toolbar","attributes":{"title":"Navigation Playground"},"children":[]},{"id":"drawerLayout_coordinatorLayout_nestedScrollView","type":"nestedScrollView","attributes":{},"children":["drawerLayout_coordinatorLayout_nestedScrollView_reactFragment"]},{"id":"drawerLayout_coordinatorLayout_nestedScrollView_reactFragment","type":"reactFragment","attributes":{},"children":[]},{"id":"drawerLayout_navigationView","type":"navigationView","attributes":{"menu":[{"title":"Start","componentName":"test"},{"title":"Page1","componentName":"navigation"}]},"children":[]}]';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RlcmsvanNQcm9qZWN0cy9zb3VyY2VyZXIvanMvX190ZXN0X18vZWxlbWVudC50ZXN0LnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBR3lCO0FBRXpCLDBEQUFpRjtBQUNqRiw0REFBOEY7QUFDOUYsMENBQWdFO0FBQ2hFLGdDQUEyQztBQUMzQyxnQ0FBa0Q7QUFFbEQsUUFBUSxDQUFDLGlCQUFpQixFQUFFO0lBQzFCLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtRQUN6QixJQUFNLE1BQU0sR0FBRywyQkFBWSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsRSxJQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQXNFLENBQUM7UUFDdkcsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEUsQ0FBQyxDQUFDLENBQUM7SUFDSCxJQUFJLENBQUMscUJBQXFCLEVBQUU7UUFDMUIsSUFBTSxNQUFNLEdBQUcsMkJBQVksQ0FDekIsRUFBRSxFQUNGLENBQUMscUNBQWlCLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUNwQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ1YsSUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFzRSxDQUFDO1FBQ3ZHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDL0MsSUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQW9CLENBQUE7UUFDbEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQzlELElBQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyw4QkFBa0csQ0FBQztRQUN4SSxNQUFNLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNILElBQUksQ0FBQyxnQ0FBZ0MsRUFBRTtRQUNyQyxJQUFNLE1BQU0sR0FBRywyQkFBWSxDQUN6QixFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFDZCxDQUFDLHFDQUFpQixFQUFFLENBQUMsQ0FDdEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNWLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBc0UsQ0FBQztRQUN2RyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQy9DLElBQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFvQixDQUFBO1FBQ2xELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUM5RCxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDSCxJQUFJLENBQUMsK0JBQStCLEVBQUU7UUFDcEMsSUFBTSxNQUFNLEdBQUcsMkJBQVksQ0FDekIsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUMsRUFDOUQ7WUFDRSxxQ0FBaUIsQ0FDZixFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsRUFDekI7Z0JBQ0UsaUNBQVksQ0FDVixFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsRUFDMUI7b0JBQ0UsNEJBQWdCLENBQUMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQztpQkFDckQsQ0FDRjtnQkFDRCx1QkFBZ0IsQ0FDZCxFQUFFLEVBQ0YsQ0FBQyxtQkFBWSxDQUFDLEVBQUUsV0FBVyxFQUFFLGdCQUFTLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FDcEU7YUFDRixDQUNGO1lBQ0QsbUNBQWMsQ0FDWjtnQkFDRSxjQUFjLEVBQUU7b0JBQ2QsZ0NBQWlCLENBQUMsc0JBQXNCLENBQUMsS0FBSztvQkFDOUMsZ0NBQWlCLENBQUMsc0JBQXNCLENBQUMsSUFBSTtpQkFDOUM7YUFDRixDQUNGO1NBQ0YsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxVQUFpSCxDQUFDO1FBQzlMLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBRS9DLElBQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQywrQ0FBc0osQ0FBQztRQUMzTCxJQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFvQixDQUFBO1FBQ3RELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsOERBQThELENBQUMsQ0FBQztRQUU1RixJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLDJCQUErSSxDQUFBO1FBQ2pMLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUMsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxDQUFDLHdCQUF3QixFQUFFO1FBQzdCLElBQU0sTUFBTSxHQUFHLDJCQUFZLENBQ3pCLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFDLEVBQzlEO1lBQ0UscUNBQWlCLENBQ2YsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEVBQ3pCO2dCQUNFLGlDQUFZLENBQ1YsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLEVBQzFCO29CQUNFLDRCQUFnQixDQUFDLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLENBQUM7aUJBQ3JELENBQ0Y7Z0JBQ0QsdUJBQWdCLENBQ2QsRUFBRSxFQUNGLENBQUMsbUJBQVksQ0FBQyxFQUFFLFdBQVcsRUFBRSxnQkFBUyxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQ3BFO2FBQ0YsQ0FDRjtZQUNELG1DQUFjLENBQ1o7Z0JBQ0UsY0FBYyxFQUFFO29CQUNkLGdDQUFpQixDQUFDLHNCQUFzQixDQUFDLEtBQUs7b0JBQzlDLGdDQUFpQixDQUFDLHNCQUFzQixDQUFDLElBQUk7aUJBQzlDO2FBQ0YsQ0FDRjtTQUNGLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsMkNBQTJDO0FBQzNDLElBQU0sVUFBVSxHQUFHLGtuQ0FBa25DLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2RlcmsvanNQcm9qZWN0cy9zb3VyY2VyZXIvanMvX190ZXN0X18vZWxlbWVudC50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERyYXdlckxheW91dCxcbiAgRHJhd2VybGF5b3V0VHlwZXMsXG59IGZyb20gJy4uL2RyYXdlcmxheW91dCc7XG5pbXBvcnQgeyBWaWV3QmFzZSB9IGZyb20gJy4uL2VsZW1lbnQnO1xuaW1wb3J0IHsgQ29vcmRpbmF0b3JMYXlvdXQsIENvb3JkaW5hdG9ybGF5b3V0VHlwZXMgfSBmcm9tICcuLi9jb29yZGluYXRvcmxheW91dCc7XG5pbXBvcnQgeyBBcHBCYXJMYXlvdXQsIE5hdmlnYXRpb25WaWV3LCBDb21wb25lbnRzTWF0ZXJpYWxUeXBlcyB9IGZyb20gJy4uL2NvbXBvbmVudHNtYXRlcmlhbCc7XG5pbXBvcnQgeyBBcHBjb21wYXRUb29sYmFyLCBBcHBjb21wYXRUeXBlcyB9IGZyb20gJy4uL2FwcGNvbXBhdCc7XG5pbXBvcnQgeyBOZXN0ZWRTY3JvbGxWaWV3IH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBMaW5lYXJMYXlvdXQsIE1haW5UeXBlcyB9IGZyb20gJy4uL21haW4nO1xuXG5kZXNjcmliZSgndGVzdGluZyBlbGVtZW50JywgKCkgPT4ge1xuICB0ZXN0KCdzaW5nbGUgb3B0aW9uIGlzIHNldCcsICgpID0+IHtcbiAgICAgIGNvbnN0IGxheW91dCA9IERyYXdlckxheW91dCh7IGNvbG9yUHJpbWFyeURhcms6ICd3aGl0ZSd9KS5idWlsZCgpO1xuICAgICAgY29uc3QgZHJhd2VyTGF5b3V0ID0gbGF5b3V0Lm1hcC5kcmF3ZXJMYXlvdXQgYXMgVmlld0Jhc2U8RHJhd2VybGF5b3V0VHlwZXMuRHJhd2VyTGF5b3V0QXR0cmlidXRlcywge30+O1xuICAgICAgZXhwZWN0KGRyYXdlckxheW91dC5hdHRyaWJ1dGVzLmNvbG9yUHJpbWFyeURhcmspLnRvRXF1YWwoJ3doaXRlJyk7XG4gIH0pO1xuICB0ZXN0KCdzaW5nbGUgY2hpbGQgaXMgc2V0JywgKCkgPT4ge1xuICAgIGNvbnN0IGxheW91dCA9IERyYXdlckxheW91dChcbiAgICAgIHt9LFxuICAgICAgW0Nvb3JkaW5hdG9yTGF5b3V0KHsgaWQ6ICd0ZXN0JyB9KV1cbiAgICApLmJ1aWxkKCk7XG4gICAgY29uc3QgZHJhd2VyTGF5b3V0ID0gbGF5b3V0Lm1hcC5kcmF3ZXJMYXlvdXQgYXMgVmlld0Jhc2U8RHJhd2VybGF5b3V0VHlwZXMuRHJhd2VyTGF5b3V0QXR0cmlidXRlcywge30+O1xuICAgIGV4cGVjdChkcmF3ZXJMYXlvdXQpLnRvSGF2ZVByb3BlcnR5KFwiY2hpbGRyZW5cIilcbiAgICBjb25zdCBjaGlsZHJlbiA9IGRyYXdlckxheW91dC5jaGlsZHJlbiBhcyBTdHJpbmdbXVxuICAgIGV4cGVjdChjaGlsZHJlblswXSkudG9FcXVhbCgnZHJhd2VyTGF5b3V0X2Nvb3JkaW5hdG9yTGF5b3V0Jyk7XG4gICAgY29uc3QgY29vcmRpbmF0b3JMYXlvdXQgPSBsYXlvdXQubWFwLmRyYXdlckxheW91dF9jb29yZGluYXRvckxheW91dCBhcyBWaWV3QmFzZTxDb29yZGluYXRvcmxheW91dFR5cGVzLkNvb3JkaW5hdG9yTGF5b3V0QXR0cmlidXRlcywge30+O1xuICAgIGV4cGVjdChjb29yZGluYXRvckxheW91dC5hdHRyaWJ1dGVzLmlkKS50b0VxdWFsKCd0ZXN0Jyk7XG4gIH0pO1xuICB0ZXN0KCdzaW5nbGUgY2hpbGQgYW5kIG9wdGlvbiBpcyBzZXQnLCAoKSA9PiB7XG4gICAgY29uc3QgbGF5b3V0ID0gRHJhd2VyTGF5b3V0KFxuICAgICAgeyBpZDogJ25vb3QnIH0sXG4gICAgICBbQ29vcmRpbmF0b3JMYXlvdXQoKV0sXG4gICAgKS5idWlsZCgpO1xuICAgIGNvbnN0IGRyYXdlckxheW91dCA9IGxheW91dC5tYXAuZHJhd2VyTGF5b3V0IGFzIFZpZXdCYXNlPERyYXdlcmxheW91dFR5cGVzLkRyYXdlckxheW91dEF0dHJpYnV0ZXMsIHt9PjtcbiAgICBleHBlY3QoZHJhd2VyTGF5b3V0KS50b0hhdmVQcm9wZXJ0eShcImNoaWxkcmVuXCIpXG4gICAgY29uc3QgY2hpbGRyZW4gPSBkcmF3ZXJMYXlvdXQuY2hpbGRyZW4gYXMgU3RyaW5nW11cbiAgICBleHBlY3QoY2hpbGRyZW5bMF0pLnRvRXF1YWwoJ2RyYXdlckxheW91dF9jb29yZGluYXRvckxheW91dCcpO1xuICAgIGV4cGVjdChkcmF3ZXJMYXlvdXQuYXR0cmlidXRlcy5pZCkudG9FcXVhbCgnbm9vdCcpO1xuICB9KTtcbiAgdGVzdCgnZHJhd2VyIHdpdGggbmF2aWdhdGlvbiBsYXlvdXQnLCAoKSA9PiB7XG4gICAgY29uc3QgbGF5b3V0ID0gRHJhd2VyTGF5b3V0KFxuICAgICAgeyBsYXlvdXRfd2lkdGg6IFwibWF0Y2hfcGFyZW50XCIsIGxheW91dF9oZWlnaHQ6IFwibWF0Y2hfcGFyZW50XCJ9LCBcbiAgICAgIFtcbiAgICAgICAgQ29vcmRpbmF0b3JMYXlvdXQoXG4gICAgICAgICAgeyBiYWNrZ3JvdW5kOiBcIiNGRUZFRkVcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIEFwcEJhckxheW91dChcbiAgICAgICAgICAgICAgeyBsYXlvdXRfaGVpZ2h0OiBcIjI5MGRwXCIgfSxcbiAgICAgICAgICAgICAgWyAgICAgICAgICBcbiAgICAgICAgICAgICAgICBBcHBjb21wYXRUb29sYmFyKHsgdGl0bGU6ICdOYXZpZ2F0aW9uIFBsYXlncm91bmQnIH0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgTmVzdGVkU2Nyb2xsVmlldyhcbiAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgIFtMaW5lYXJMYXlvdXQoeyBvcmllbnRhdGlvbjogTWFpblR5cGVzLk9yaWVudGF0aW9uRW51bS52ZXJ0aWNhbCB9KV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBOYXZpZ2F0aW9uVmlldyhcbiAgICAgICAgICB7IFxuICAgICAgICAgICAgbGF5b3V0X2dyYXZpdHk6IFsgXG4gICAgICAgICAgICAgIERyYXdlcmxheW91dFR5cGVzLkxheW91dEdyYXZpdHlGbGFnc0VudW0uc3RhcnQsXG4gICAgICAgICAgICAgIERyYXdlcmxheW91dFR5cGVzLkxheW91dEdyYXZpdHlGbGFnc0VudW0ubGVmdFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgIF0pLmJ1aWxkKCk7XG4gICAgY29uc3QgYXBwQmFyTGF5b3V0ID0gbGF5b3V0Lm1hcC5kcmF3ZXJMYXlvdXRfY29vcmRpbmF0b3JMYXlvdXRfYXBwQmFyTGF5b3V0LmF0dHJpYnV0ZXMgYXMgVmlld0Jhc2U8Q29tcG9uZW50c01hdGVyaWFsVHlwZXMuQXBwQmFyTGF5b3V0QXR0cmlidXRlcywgTWFpblR5cGVzLlZpZXdHcm91cExheW91dFBhcmFtc0F0dHJpYnV0ZXM+O1xuICAgIGV4cGVjdChhcHBCYXJMYXlvdXQuYXR0cmlidXRlcy5sYXlvdXRfaGVpZ2h0KS50b0VxdWFsKHRydWUpO1xuICAgIGV4cGVjdChhcHBCYXJMYXlvdXQpLnRvSGF2ZVByb3BlcnR5KFwiY2hpbGRyZW5cIilcblxuICAgIGNvbnN0IG5lc3RlZFNjcm9sbFZpZXcgPSBsYXlvdXQubWFwLmRyYXdlckxheW91dF9jb29yZGluYXRvckxheW91dF9uZXN0ZWRTY3JvbGxWaWV3IGFzIFZpZXdCYXNlPENvbXBvbmVudHNNYXRlcmlhbFR5cGVzLkFwcEJhckxheW91dEF0dHJpYnV0ZXMsIE1haW5UeXBlcy5WaWV3R3JvdXBMYXlvdXRQYXJhbXNBdHRyaWJ1dGVzPjtcbiAgICBjb25zdCBjaGlsZHJlbiA9IG5lc3RlZFNjcm9sbFZpZXcuY2hpbGRyZW4gYXMgU3RyaW5nW11cbiAgICBleHBlY3QoY2hpbGRyZW5bMF0pLnRvRXF1YWwoJ2RyYXdlckxheW91dF9jb29yZGluYXRvckxheW91dF9uZXN0ZWRTY3JvbGxWaWV3X2xpbmVhckxheW91dCcpO1xuXG4gICAgY29uc3QgbmF2aWdhdGlvblZpZXcgPSBsYXlvdXQubWFwLmRyYXdlckxheW91dF9uYXZpZ2F0aW9uVmlldyBhcyBWaWV3QmFzZTxDb21wb25lbnRzTWF0ZXJpYWxUeXBlcy5OYXZpZ2F0aW9uVmlld0F0dHJpYnV0ZXMsIERyYXdlcmxheW91dFR5cGVzLkRyYXdlckxheW91dExheW91dFBhcmFtc0F0dHJpYnV0ZXM+XG4gICAgZXhwZWN0KG5hdmlnYXRpb25WaWV3LmF0dHJpYnV0ZXMubGF5b3V0X2dyYXZpdHkpLnRvRXF1YWwoWydzdGFydCcsICdsZWZ0J10pO1xuICB9KTtcbiAgdGVzdCgnY29udmVydHMgdG8ganNvbiBhcnJheScsICgpID0+IHtcbiAgICBjb25zdCBsYXlvdXQgPSBEcmF3ZXJMYXlvdXQoXG4gICAgICB7IGxheW91dF93aWR0aDogXCJtYXRjaF9wYXJlbnRcIiwgbGF5b3V0X2hlaWdodDogXCJtYXRjaF9wYXJlbnRcIn0sIFxuICAgICAgW1xuICAgICAgICBDb29yZGluYXRvckxheW91dChcbiAgICAgICAgICB7IGJhY2tncm91bmQ6IFwiI0ZFRkVGRVwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgQXBwQmFyTGF5b3V0KFxuICAgICAgICAgICAgICB7IGxheW91dF9oZWlnaHQ6IFwiMjkwZHBcIiB9LFxuICAgICAgICAgICAgICBbICAgICAgICAgIFxuICAgICAgICAgICAgICAgIEFwcGNvbXBhdFRvb2xiYXIoeyB0aXRsZTogJ05hdmlnYXRpb24gUGxheWdyb3VuZCcgfSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBOZXN0ZWRTY3JvbGxWaWV3KFxuICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgW0xpbmVhckxheW91dCh7IG9yaWVudGF0aW9uOiBNYWluVHlwZXMuT3JpZW50YXRpb25FbnVtLnZlcnRpY2FsIH0pXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIE5hdmlnYXRpb25WaWV3KFxuICAgICAgICAgIHsgXG4gICAgICAgICAgICBsYXlvdXRfZ3Jhdml0eTogWyBcbiAgICAgICAgICAgICAgRHJhd2VybGF5b3V0VHlwZXMuTGF5b3V0R3Jhdml0eUZsYWdzRW51bS5zdGFydCxcbiAgICAgICAgICAgICAgRHJhd2VybGF5b3V0VHlwZXMuTGF5b3V0R3Jhdml0eUZsYWdzRW51bS5sZWZ0XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICApLFxuICAgICAgXSkuYnVpbGQoKTtcbiAgICBjb25zb2xlLmxvZyhsYXlvdXQudG9Kc29uKCkpO1xuICAgIGV4cGVjdChsYXlvdXQudG9Kc29uKCkpLnRvRXF1YWwoanNvbk91dHB1dCk7XG4gIH0pO1xufSk7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbmNvbnN0IGpzb25PdXRwdXQgPSAnW3tcImlkXCI6XCJkcmF3ZXJMYXlvdXRcIixcInR5cGVcIjpcImRyYXdlckxheW91dFwiLFwiYXR0cmlidXRlc1wiOnt9LFwiY2hpbGRyZW5cIjpbXCJkcmF3ZXJMYXlvdXRfY29vcmRpbmF0b3JMYXlvdXRcIixcImRyYXdlckxheW91dF9uYXZpZ2F0aW9uVmlld1wiXX0se1wiaWRcIjpcImRyYXdlckxheW91dF9jb29yZGluYXRvckxheW91dFwiLFwidHlwZVwiOlwiY29vcmRpbmF0b3JMYXlvdXRcIixcImF0dHJpYnV0ZXNcIjp7fSxcImNoaWxkcmVuXCI6W1wiZHJhd2VyTGF5b3V0X2Nvb3JkaW5hdG9yTGF5b3V0X2FwcEJhckxheW91dFwiLFwiZHJhd2VyTGF5b3V0X2Nvb3JkaW5hdG9yTGF5b3V0X25lc3RlZFNjcm9sbFZpZXdcIl19LHtcImlkXCI6XCJkcmF3ZXJMYXlvdXRfY29vcmRpbmF0b3JMYXlvdXRfYXBwQmFyTGF5b3V0XCIsXCJ0eXBlXCI6XCJhcHBCYXJMYXlvdXRcIixcImF0dHJpYnV0ZXNcIjp7XCJmaXRzU3lzdGVtV2luZG93XCI6dHJ1ZX0sXCJjaGlsZHJlblwiOltcImRyYXdlckxheW91dF9jb29yZGluYXRvckxheW91dF9hcHBCYXJMYXlvdXRfdG9vbGJhclwiXX0se1wiaWRcIjpcImRyYXdlckxheW91dF9jb29yZGluYXRvckxheW91dF9hcHBCYXJMYXlvdXRfdG9vbGJhclwiLFwidHlwZVwiOlwidG9vbGJhclwiLFwiYXR0cmlidXRlc1wiOntcInRpdGxlXCI6XCJOYXZpZ2F0aW9uIFBsYXlncm91bmRcIn0sXCJjaGlsZHJlblwiOltdfSx7XCJpZFwiOlwiZHJhd2VyTGF5b3V0X2Nvb3JkaW5hdG9yTGF5b3V0X25lc3RlZFNjcm9sbFZpZXdcIixcInR5cGVcIjpcIm5lc3RlZFNjcm9sbFZpZXdcIixcImF0dHJpYnV0ZXNcIjp7fSxcImNoaWxkcmVuXCI6W1wiZHJhd2VyTGF5b3V0X2Nvb3JkaW5hdG9yTGF5b3V0X25lc3RlZFNjcm9sbFZpZXdfcmVhY3RGcmFnbWVudFwiXX0se1wiaWRcIjpcImRyYXdlckxheW91dF9jb29yZGluYXRvckxheW91dF9uZXN0ZWRTY3JvbGxWaWV3X3JlYWN0RnJhZ21lbnRcIixcInR5cGVcIjpcInJlYWN0RnJhZ21lbnRcIixcImF0dHJpYnV0ZXNcIjp7fSxcImNoaWxkcmVuXCI6W119LHtcImlkXCI6XCJkcmF3ZXJMYXlvdXRfbmF2aWdhdGlvblZpZXdcIixcInR5cGVcIjpcIm5hdmlnYXRpb25WaWV3XCIsXCJhdHRyaWJ1dGVzXCI6e1wibWVudVwiOlt7XCJ0aXRsZVwiOlwiU3RhcnRcIixcImNvbXBvbmVudE5hbWVcIjpcInRlc3RcIn0se1widGl0bGVcIjpcIlBhZ2UxXCIsXCJjb21wb25lbnROYW1lXCI6XCJuYXZpZ2F0aW9uXCJ9XX0sXCJjaGlsZHJlblwiOltdfV0nO1xuIl0sInZlcnNpb24iOjN9