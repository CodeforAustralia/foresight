<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>DF_SFC</Name>
    <UserStyle>
      <Name>DF_SFC</Name>
      <Title>DF Color style</Title>
      <Abstract>Color bins</Abstract>
      <FeatureTypeStyle>
        <Rule>
          <RasterSymbolizer>
            <Opacity>1.0</Opacity>
            <ColorMap type="intervals">
              <ColorMapEntry color="#D4D4D4" quantity="-127" label=" No Data" opacity="0" />            
              <ColorMapEntry color="#74B265" quantity="5" label=" 0 — &lt;5" />
              <ColorMapEntry color="#A8D18B" quantity="6" label=" 5 — &lt;6" />
              <ColorMapEntry color="#DFF0B9" quantity="7" label=" 6 — &lt;7" />
              <ColorMapEntry color="#F9DCB4" quantity="8" label=" 7 — &lt;8" />
              <ColorMapEntry color="#E89B81" quantity="9" label=" 8 — &lt;9" />
              <ColorMapEntry color="#CF5B5B" quantity="11" label=" 9 — &lt;10" />
              
            </ColorMap>
          </RasterSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>